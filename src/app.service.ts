import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class AppService {
  getPhrases(): string[] {
    const txt = fs.readFileSync(
      path.resolve(__dirname, './data/data.txt'),
      'utf8',
    );
    const lines = txt.split('\r\n');

    const phrases: string[] = [];
    lines.forEach((line) => {
      phrases.push(line);
    });
    return phrases;
  }

  getPhrase(): string {
    const phrases = this.getPhrases();
    const phrase = phrases[Math.floor(Math.random() * phrases.length)];
    return phrase;
  }
}
