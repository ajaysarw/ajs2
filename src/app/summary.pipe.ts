import {Pipe, PipeTransform } from '@angular/core';

@Pipe({
    'name':'summary'
})
export class SummaryPipe implements PipeTransform
{
    public transform(value: string, limit?: number, format?: string)
    {
        if (!value) {
            return null;
        }

        if (!limit) {
            const limit = 50;
        }

        if (!format) {
            return value.substring(0, limit) + '...';
        } else {
            return value.substring(0, limit) + '...';
        }
    }
}
