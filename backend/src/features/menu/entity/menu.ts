export interface Menu {
    id: string;       

    name: string;      
    
    parentId?: string; 
    
    parent?: Menu | null; 
    
    children: Menu[];  
    
    depth: number;     
    
    createdAt: Date;   
    
    updatedAt: Date;   
  }
  