// Core content data interface
export interface ContentItem {
  id: string;
  title: string;
  content: string;
  category: 'escape' | 'warning' | 'preparation' | 'risk' | 'history';
  priority: 'high' | 'medium' | 'low';
  images?: string[];
  lastUpdated: Date;
  source?: string;
  tags?: string[];
}

// Emergency guide interface
export interface EmergencyGuide {
  id: string;
  title: string;
  steps: EmergencyStep[];
  estimatedTime: number; // minutes
  difficulty: 'easy' | 'medium' | 'hard';
  applicableScenarios: string[];
  isOfflineAvailable: boolean;
}

export interface EmergencyStep {
  stepNumber: number;
  title: string;
  description: string;
  image?: string;
  warning?: string;
  tips?: string[];
  timeEstimate?: number; // seconds
}

// Risk query interface
export interface RiskArea {
  id: string;
  name: string;
  country: string;
  riskLevel: 1 | 2 | 3 | 4 | 5; // 1 lowest, 5 highest
  description: string;
  lastTsunamiYear?: number;
  population: number;
  coordinates: {
    lat: number;
    lng: number;
  };
  safetyTips?: string[];
}

// Warning information interface
export interface WarningSign {
  id: string;
  type: 'natural' | 'official' | 'animal';
  name: string;
  description: string;
  urgencyLevel: 'immediate' | 'high' | 'medium' | 'low';
  actionRequired: string[];
  image?: string;
  recognitionTips?: string[];
}

// Emergency preparation interface
export interface EmergencyKit {
  id: string;
  category: 'basic' | 'advanced' | 'family' | 'pet';
  items: EmergencyKitItem[];
  description: string;
  priority: 'essential' | 'recommended' | 'optional';
}

export interface EmergencyKitItem {
  name: string;
  quantity: string;
  description: string;
  alternatives?: string[];
  storageNotes?: string;
}

// Historical case interface
export interface HistoricalCase {
  id: string;
  name: string;
  year: number;
  location: string;
  magnitude?: number;
  casualties: number;
  description: string;
  lessonsLearned: string[];
  successStories?: string[];
  images?: string[];
  type: 'major_disaster' | 'success_story' | 'near_miss';
}

// Search and navigation
export interface SearchResult {
  item: ContentItem | EmergencyGuide | RiskArea | WarningSign;
  type: 'content' | 'guide' | 'risk' | 'warning';
  relevanceScore: number;
  matchedFields: string[];
}

export interface NavigationItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  path: string;
  priority: number;
  isEmergency?: boolean;
}

// App state and context
export interface AppState {
  isOffline: boolean;
  currentLocation?: {
    lat: number;
    lng: number;
  };
  userPreferences: {
    language: 'en' | 'zh';
    highContrast: boolean;
    fontSize: 'small' | 'medium' | 'large';
  };
  emergencyMode: boolean;
}

// Error handling
export interface AppError {
  type: 'network' | 'data' | 'user' | 'unknown';
  message: string;
  code?: string;
  timestamp: Date;
  context?: Record<string, any>;
}