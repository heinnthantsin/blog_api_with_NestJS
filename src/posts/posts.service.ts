import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
    private posts = [
        { id: 1, title: 'Hello NestJS', content: 'Nest is awesome!' },
        { id: 2, title: 'Second Post', content: 'More about NestJS' },
    ];

    findAll() {
        return this.posts;
    }
}
