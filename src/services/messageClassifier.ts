// Lightweight message classification service
// Analyzes contact messages and generates smart subject lines

export interface MessageCategory {
  category: string;
  confidence: number;
  subjectSuffix: string;
  description: string;
}

export interface ClassificationResult {
  category: string;
  confidence: number;
  subjectLine: string;
  reasoning: string;
}

// Pre-defined categories with keywords and patterns
const MESSAGE_CATEGORIES = {
  job_inquiry: {
    keywords: [
      'job', 'position', 'opportunity', 'hiring', 'career', 'work', 'employ',
      'opening', 'vacancy', 'role', 'application', 'resume', 'cv', 'interview',
      'recruit', 'available', 'looking for work', 'seeking', 'interested in working'
    ],
    subjectSuffix: 'Job Inquiry',
    description: 'Employment or career-related inquiry'
  },
  
  collaboration: {
    keywords: [
      'collaborate', 'project', 'partnership', 'team up', 'work together',
      'joint', 'cooperation', 'contribute', 'help with', 'build together',
      'startup', 'business', 'venture', 'idea', 'proposal'
    ],
    subjectSuffix: 'Collaboration Request',
    description: 'Partnership or collaboration opportunity'
  },
  
  technical_question: {
    keywords: [
      'question', 'help', 'how', 'technical', 'code', 'programming', 'development',
      'bug', 'error', 'issue', 'problem', 'solution', 'advice', 'guidance',
      'tutorial', 'explain', 'understand', 'learn', 'teach'
    ],
    subjectSuffix: 'Technical Question',
    description: 'Technical or coding-related question'
  },
  
  networking: {
    keywords: [
      'connect', 'network', 'linkedin', 'coffee', 'chat', 'meet', 'discussion',
      'talk', 'advice', 'mentor', 'guidance', 'experience', 'industry',
      'professional', 'career advice', 'insights'
    ],
    subjectSuffix: 'Networking Request',
    description: 'Professional networking or mentorship'
  },
  
  feedback: {
    keywords: [
      'feedback', 'review', 'comment', 'opinion', 'thoughts', 'suggestion',
      'improvement', 'critique', 'portfolio', 'website', 'impressive',
      'great work', 'excellent', 'love your', 'amazing'
    ],
    subjectSuffix: 'Feedback & Comments',
    description: 'Feedback about portfolio or work'
  },
  
  freelance: {
    keywords: [
      'freelance', 'contract', 'consultant', 'hire', 'services', 'project',
      'budget', 'cost', 'quote', 'estimate', 'client', 'commission',
      'paid work', 'consulting', 'development services'
    ],
    subjectSuffix: 'Freelance Inquiry',
    description: 'Freelance or consulting work request'
  },
  
  student_inquiry: {
    keywords: [
      'student', 'university', 'college', 'thesis', 'research', 'study',
      'academic', 'education', 'learning', 'course', 'assignment',
      'graduate', 'undergraduate', 'dissertation'
    ],
    subjectSuffix: 'Student Inquiry',
    description: 'Academic or educational inquiry'
  },
  
  general_contact: {
    keywords: [
      'hello', 'hi', 'hey', 'greetings', 'contact', 'reach out', 'get in touch',
      'introduce', 'introduction', 'general', 'misc', 'other'
    ],
    subjectSuffix: 'General Contact',
    description: 'General contact or introduction'
  }
};

// Classify message content based on keywords and patterns
export function classifyMessage(message: string, userName: string): ClassificationResult {
  if (!message || message.trim().length === 0) {
    return {
      category: 'general_contact',
      confidence: 0.8,
      subjectLine: `New Message from ${userName} — General Contact`,
      reasoning: 'No message content provided'
    };
  }

  const normalizedMessage = message.toLowerCase();
  const scores: { [key: string]: number } = {};
  
  // Calculate scores for each category
  Object.entries(MESSAGE_CATEGORIES).forEach(([categoryKey, categoryData]) => {
    let score = 0;
    let matchedKeywords: string[] = [];
    
    categoryData.keywords.forEach(keyword => {
      if (normalizedMessage.includes(keyword.toLowerCase())) {
        // Weight longer keywords more heavily
        const weight = keyword.split(' ').length;
        score += weight;
        matchedKeywords.push(keyword);
      }
    });
    
    // Bonus for multiple keyword matches
    if (matchedKeywords.length > 1) {
      score += matchedKeywords.length * 0.5;
    }
    
    scores[categoryKey] = score;
  });
  
  // Find the category with the highest score
  const bestCategory = Object.keys(scores).reduce((a, b) => 
    scores[a] > scores[b] ? a : b
  );
  
  const maxScore = scores[bestCategory];
  const totalWords = normalizedMessage.split(' ').length;
  const confidence = Math.min(0.95, Math.max(0.3, maxScore / totalWords));
  
  // If confidence is too low, default to general contact
  const finalCategory = confidence < 0.4 ? 'general_contact' : bestCategory;
  const categoryData = MESSAGE_CATEGORIES[finalCategory as keyof typeof MESSAGE_CATEGORIES];
  
  return {
    category: finalCategory,
    confidence: confidence,
    subjectLine: `New Message from ${userName} — ${categoryData.subjectSuffix}`,
    reasoning: `Detected as ${categoryData.description} (confidence: ${Math.round(confidence * 100)}%)`
  };
}

// Advanced classification with sentiment analysis
export function classifyMessageAdvanced(message: string, userName: string): ClassificationResult {
  const basicResult = classifyMessage(message, userName);
  
  // Enhanced analysis for better accuracy
  const normalizedMessage = message.toLowerCase();
  
  // Detect urgency
  const urgentKeywords = ['urgent', 'asap', 'immediately', 'quickly', 'rush', 'deadline'];
  const hasUrgency = urgentKeywords.some(keyword => normalizedMessage.includes(keyword));
  
  // Detect positive sentiment
  const positiveKeywords = ['love', 'amazing', 'excellent', 'impressed', 'fantastic', 'brilliant'];
  const hasPositiveTone = positiveKeywords.some(keyword => normalizedMessage.includes(keyword));
  
  // Detect question indicators
  const questionIndicators = ['?', 'how', 'what', 'why', 'when', 'where', 'which', 'help'];
  const isQuestion = questionIndicators.some(indicator => normalizedMessage.includes(indicator));
  
  // Modify subject line based on advanced analysis
  let enhancedSubject = basicResult.subjectLine;
  
  if (hasUrgency) {
    enhancedSubject = enhancedSubject.replace(' — ', ' — [URGENT] ');
  }
  
  if (hasPositiveTone && basicResult.category === 'feedback') {
    enhancedSubject = enhancedSubject.replace('Feedback & Comments', 'Positive Feedback');
  }
  
  if (isQuestion && basicResult.category === 'general_contact') {
    enhancedSubject = enhancedSubject.replace('General Contact', 'Question');
  }
  
  return {
    ...basicResult,
    subjectLine: enhancedSubject,
    reasoning: basicResult.reasoning + 
      (hasUrgency ? ' | Contains urgency indicators' : '') +
      (hasPositiveTone ? ' | Positive tone detected' : '') +
      (isQuestion ? ' | Question format detected' : '')
  };
}

// Export for debugging and testing
export function debugClassification(message: string): any {
  const normalizedMessage = message.toLowerCase();
  const results: any = {};
  
  Object.entries(MESSAGE_CATEGORIES).forEach(([categoryKey, categoryData]) => {
    const matchedKeywords = categoryData.keywords.filter(keyword =>
      normalizedMessage.includes(keyword.toLowerCase())
    );
    
    results[categoryKey] = {
      matchedKeywords,
      score: matchedKeywords.length,
      category: categoryData.description
    };
  });
  
  return results;
} 