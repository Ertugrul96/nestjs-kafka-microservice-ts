

import { Injectable, NotFoundException } from '@nestjs/common';


@Injectable()
export class UsersService {
    private readonly firestoreCollection = 'users'; 
    constructor() {
  
    }

    async findById(id: string): Promise<any> {
        console.log(`[Firestore Sim]: Querying ${this.firestoreCollection} collection for document ID: ${id}`);
        
        if (id === '404-error') {
            throw new NotFoundException(`User with ID ${id} not found in Firestore.`);
        }
        return {
            id: id,
            username: 'Ertugrul96',
            email: 'user@example.com',
            createdAt: new Date().toISOString(), 
            source: `Simulated Firestore Read from NestJS Service`
        };
    }
}