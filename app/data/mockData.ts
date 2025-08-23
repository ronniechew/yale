// Mock data for Yale Printing Management System
// This file contains realistic sample data for demo purposes

export interface CurrentUser {
  id: string
  name: string
  email: string
  role: string
  department: string
  employeeId: string
  avatar?: string
}

export interface PrintingForm {
  id: string
  jobDocketNo: string
  orderQuantity: string
  customerName: string
  partNumberVersion: string
  receivedPaperQty: string
  machineType: string
  performedBy: string
  date: string
  time: string
  pagePrinted: string
  lineClearance1: string
  lineClearance2: string
  lineClearance3: string
  lineClearanceConfirmedBy: string
  qc1: {
    partNoCheck: string
    versionCheck: string
    printingCheck: string
    verification: string
  }
  qc2: {
    partNoCheck: string
    versionCheck: string
    printingCheck: string
    verification: string
  }
  hourlyChecks: Record<string, number>
  defects: Record<string, number>
  remarks: string
  printedQuantity: string
  totalRejectQuantity: string
}

export interface Client {
  id: string
  name: string
  company: string
  email: string
  phone: string
  address: string
  industry: string
  contactPerson: string
}

export interface Material {
  id: string
  name: string
  type: 'paper' | 'cardboard' | 'fabric' | 'plastic' | 'vinyl'
  weight?: string
  size?: string
  color?: string
  finish?: string
  supplier: string
  costPerUnit: number
  unit: string
}

export interface PantoneColor {
  code: string
  name: string
  hex: string
  category: string
}

export interface PrintingMethod {
  id: string
  name: string
  description: string
  suitableFor: string[]
  costMultiplier: number
}

export interface FinishingMethod {
  id: string
  name: string
  description: string
  suitableFor: string[]
  costMultiplier: number
}

// Mock Current User Data
export const mockCurrentUser: CurrentUser = {
  id: 'user-001',
  name: 'Vincent',
  email: 'vincent@yaleprinting.com',
  role: 'Printing Operator',
  department: 'Production',
  employeeId: 'EMP001',
  avatar: '/avatars/vincent.jpg'
}

// Mock Printing Form Data
export const mockPrintingForm: PrintingForm = {
  id: 'print-001',
  jobDocketNo: '700601',
  orderQuantity: '30000',
  customerName: 'B. Braun',
  partNumberVersion: '16077881 / 1223',
  receivedPaperQty: '6200',
  machineType: 'SM102-ZP',
  performedBy: 'Vincent',
  date: '2025-08-21',
  time: '11:30',
  pagePrinted: 'Back Print',
  lineClearance1: '',
  lineClearance2: '',
  lineClearance3: '',
  lineClearanceConfirmedBy: '',
  qc1: {
    partNoCheck: '',
    versionCheck: '',
    printingCheck: '',
    verification: ''
  },
  qc2: {
    partNoCheck: '',
    versionCheck: '',
    printingCheck: '',
    verification: ''
  },
  hourlyChecks: {
    '1:00 PM': 20,
    '2:00 PM': 10
  },
  defects: {
    'Mis-Registration': 0,
    'Dirty Mark': 0,
    'Blurred Image': 0,
    'Missing Text': 0,
    'Worn Out Plate': 0,
    'Hickey': 0,
    'Ghosting/Doubling': 0,
    'Oil Stain': 0,
    'Page Sequence Incorrect': 0,
    'Others (Please Specify)': 0
  },
  remarks: 'MC Setup = 78 pcs\ntotal reject = 78 pcs',
  printedQuantity: '6122',
  totalRejectQuantity: '78'
}

// Mock Clients Data
export const mockClients: Client[] = [
  {
    id: 'client-001',
    name: 'John Smith',
    company: 'TechCorp Solutions',
    email: 'john.smith@techcorp.com',
    phone: '+1 (555) 123-4567',
    address: '123 Innovation Drive, Silicon Valley, CA 94025',
    industry: 'Technology',
    contactPerson: 'John Smith'
  },
  {
    id: 'client-002',
    name: 'Sarah Johnson',
    company: 'Green Earth Organics',
    email: 'sarah.j@greenearth.com',
    phone: '+1 (555) 234-5678',
    address: '456 Eco Street, Portland, OR 97201',
    industry: 'Food & Beverage',
    contactPerson: 'Sarah Johnson'
  },
  {
    id: 'client-003',
    name: 'Michael Chen',
    company: 'Luxury Fashion House',
    email: 'm.chen@luxuryfashion.com',
    phone: '+1 (555) 345-6789',
    address: '789 Fashion Avenue, New York, NY 10001',
    industry: 'Fashion & Retail',
    contactPerson: 'Michael Chen'
  },
  {
    id: 'client-004',
    name: 'Emily Rodriguez',
    company: 'Healthcare Plus',
    email: 'e.rodriguez@healthcareplus.com',
    phone: '+1 (555) 456-7890',
    address: '321 Medical Center Blvd, Boston, MA 02101',
    industry: 'Healthcare',
    contactPerson: 'Emily Rodriguez'
  },
  {
    id: 'client-005',
    name: 'David Wilson',
    company: 'Financial Services Group',
    email: 'd.wilson@financialgroup.com',
    phone: '+1 (555) 567-8901',
    address: '654 Wall Street, New York, NY 10005',
    industry: 'Finance',
    contactPerson: 'David Wilson'
  },
  {
    id: 'client-006',
    name: 'Lisa Thompson',
    company: 'Educational Institute',
    email: 'l.thompson@eduinst.com',
    phone: '+1 (555) 678-9012',
    address: '987 Learning Lane, Austin, TX 73301',
    industry: 'Education',
    contactPerson: 'Lisa Thompson'
  }
]

// Mock Materials Data
export const mockMaterials: Material[] = [
  // Paper Materials
  {
    id: 'mat-001',
    name: 'Premium Gloss Paper',
    type: 'paper',
    weight: '100 GSM',
    size: 'A4',
    color: 'White',
    finish: 'Gloss',
    supplier: 'PaperCo Industries',
    costPerUnit: 0.15,
    unit: 'sheet'
  },
  {
    id: 'mat-002',
    name: 'Matte Coated Paper',
    type: 'paper',
    weight: '150 GSM',
    size: 'A3',
    color: 'White',
    finish: 'Matte',
    supplier: 'PaperCo Industries',
    costPerUnit: 0.25,
    unit: 'sheet'
  },
  {
    id: 'mat-003',
    name: 'Recycled Kraft Paper',
    type: 'paper',
    weight: '80 GSM',
    size: 'A4',
    color: 'Natural',
    finish: 'Uncoated',
    supplier: 'EcoPaper Solutions',
    costPerUnit: 0.08,
    unit: 'sheet'
  },
  {
    id: 'mat-004',
    name: 'Photo Quality Paper',
    type: 'paper',
    weight: '200 GSM',
    size: 'A4',
    color: 'White',
    finish: 'Gloss',
    supplier: 'PhotoPaper Pro',
    costPerUnit: 0.45,
    unit: 'sheet'
  },
  
  // Cardboard Materials
  {
    id: 'mat-005',
    name: 'Corrugated Cardboard',
    type: 'cardboard',
    weight: '250 GSM',
    size: 'Custom',
    color: 'Brown',
    finish: 'Uncoated',
    supplier: 'CardboardCorp',
    costPerUnit: 1.20,
    unit: 'sq meter'
  },
  {
    id: 'mat-006',
    name: 'Premium Card Stock',
    type: 'cardboard',
    weight: '300 GSM',
    size: 'A4',
    color: 'White',
    finish: 'Smooth',
    supplier: 'PaperCo Industries',
    costPerUnit: 0.35,
    unit: 'sheet'
  },
  
  // Fabric Materials
  {
    id: 'mat-007',
    name: 'Cotton Canvas',
    type: 'fabric',
    weight: '340 GSM',
    size: 'Custom',
    color: 'Natural',
    finish: 'Uncoated',
    supplier: 'FabricWorld',
    costPerUnit: 8.50,
    unit: 'sq meter'
  },
  {
    id: 'mat-008',
    name: 'Polyester Banner',
    type: 'fabric',
    weight: '280 GSM',
    size: 'Custom',
    color: 'White',
    finish: 'Coated',
    supplier: 'BannerPro',
    costPerUnit: 12.00,
    unit: 'sq meter'
  },
  
  // Plastic Materials
  {
    id: 'mat-009',
    name: 'PVC Vinyl',
    type: 'plastic',
    weight: '200 GSM',
    size: 'Custom',
    color: 'White',
    finish: 'Gloss',
    supplier: 'PlasticCorp',
    costPerUnit: 6.80,
    unit: 'sq meter'
  },
  {
    id: 'mat-010',
    name: 'Polypropylene',
    type: 'plastic',
    weight: '150 GSM',
    size: 'Custom',
    color: 'Clear',
    finish: 'Transparent',
    supplier: 'PlasticCorp',
    costPerUnit: 4.20,
    unit: 'sq meter'
  }
]

// Mock Pantone Colors
export const mockPantoneColors: PantoneColor[] = [
  {
    code: 'PMS 185',
    name: 'Bright Red',
    hex: '#E31837',
    category: 'Red'
  },
  {
    code: 'PMS 286',
    name: 'Bright Blue',
    hex: '#0033A0',
    category: 'Blue'
  },
  {
    code: 'PMS 355',
    name: 'Bright Green',
    hex: '#00A651',
    category: 'Green'
  },
  {
    code: 'PMS 116',
    name: 'Bright Yellow',
    hex: '#FFD100',
    category: 'Yellow'
  },
  {
    code: 'PMS 485',
    name: 'Warm Red',
    hex: '#E31837',
    category: 'Red'
  },
  {
    code: 'PMS 7545',
    name: 'Cool Gray',
    hex: '#8A8D8F',
    category: 'Gray'
  },
  {
    code: 'PMS Black',
    name: 'Process Black',
    hex: '#000000',
    category: 'Black'
  },
  {
    code: 'PMS White',
    name: 'Process White',
    hex: '#FFFFFF',
    category: 'White'
  }
]

// Mock Printing Methods
export const mockPrintingMethods: PrintingMethod[] = [
  {
    id: 'print-001',
    name: 'Digital Printing',
    description: 'High-quality digital printing suitable for short runs and variable data',
    suitableFor: ['paper', 'cardboard'],
    costMultiplier: 1.0
  },
  {
    id: 'print-002',
    name: 'Offset Lithography',
    description: 'Traditional printing method for high-volume production',
    suitableFor: ['paper', 'cardboard'],
    costMultiplier: 0.8
  },
  {
    id: 'print-003',
    name: 'Screen Printing',
    description: 'Versatile printing method for various materials and surfaces',
    suitableFor: ['paper', 'cardboard', 'fabric', 'plastic'],
    costMultiplier: 1.2
  },
  {
    id: 'print-004',
    name: 'UV Printing',
    description: 'Ultra-violet cured printing for vibrant colors and durability',
    suitableFor: ['paper', 'cardboard', 'plastic'],
    costMultiplier: 1.5
  },
  {
    id: 'print-005',
    name: 'Dye Sublimation',
    description: 'Heat transfer printing for fabric and special materials',
    suitableFor: ['fabric'],
    costMultiplier: 1.8
  }
]

// Mock Finishing Methods
export const mockFinishingMethods: FinishingMethod[] = [
  {
    id: 'finish-001',
    name: 'Lamination',
    description: 'Protective coating for durability and enhanced appearance',
    suitableFor: ['paper', 'cardboard'],
    costMultiplier: 1.3
  },
  {
    id: 'finish-002',
    name: 'Foil Stamping',
    description: 'Metallic or colored foil application for premium look',
    suitableFor: ['paper', 'cardboard'],
    costMultiplier: 1.6
  },
  {
    id: 'finish-003',
    name: 'Embossing',
    description: 'Raised or debossed design for tactile effect',
    suitableFor: ['paper', 'cardboard'],
    costMultiplier: 1.4
  },
  {
    id: 'finish-004',
    name: 'Die Cutting',
    description: 'Custom shape cutting for unique designs',
    suitableFor: ['paper', 'cardboard', 'plastic'],
    costMultiplier: 1.7
  },
  {
    id: 'finish-005',
    name: 'Varnishing',
    description: 'Clear coating for protection and enhanced finish',
    suitableFor: ['paper', 'cardboard'],
    costMultiplier: 1.1
  },
  {
    id: 'finish-006',
    name: 'Spot UV',
    description: 'Selective UV coating for highlighting specific areas',
    suitableFor: ['paper', 'cardboard'],
    costMultiplier: 1.5
  }
]

// Helper function to get random client
export const getRandomClient = (): Client => {
  const randomIndex = Math.floor(Math.random() * mockClients.length)
  const client = mockClients[randomIndex]
  if (!client) {
    throw new Error('No clients available')
  }
  return client
}

// Helper function to get random material
export const getRandomMaterial = (): Material => {
  const randomIndex = Math.floor(Math.random() * mockMaterials.length)
  const material = mockMaterials[randomIndex]
  if (!material) {
    throw new Error('No materials available')
  }
  return material
}

// Helper function to get materials by type
export const getMaterialsByType = (type: Material['type']): Material[] => {
  return mockMaterials.filter(material => material.type === type)
}

// Helper function to get pantone colors by category
export const getPantoneColorsByCategory = (category: string): PantoneColor[] => {
  return mockPantoneColors.filter(color => color.category === category)
}

// Helper function to get printing methods by material type
export const getPrintingMethodsByMaterial = (materialType: Material['type']): PrintingMethod[] => {
  return mockPrintingMethods.filter(method => 
    method.suitableFor.includes(materialType)
  )
}

// Helper function to get finishing methods by material type
export const getFinishingMethodsByMaterial = (materialType: Material['type']): FinishingMethod[] => {
  return mockFinishingMethods.filter(method => 
    method.suitableFor.includes(materialType)
  )
}

// Helper function to get printing form data
export const getPrintingFormData = (): PrintingForm => {
  return mockPrintingForm
}
