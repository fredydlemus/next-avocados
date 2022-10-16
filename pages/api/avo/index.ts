import DB from '../../../database/db';
import enablePublicAccess from '@cors';
import { IncomingMessage, ServerResponse } from 'http';

const allAvos = async (request: IncomingMessage, response: ServerResponse) => {
    try {
        await enablePublicAccess(request, response);
        const db = new DB();
        const allEntries = await db.getAll();
        const length = allEntries.length;

        response.statusCode = 200;
        response.setHeader('Content-type', 'application/json');
        response.end(JSON.stringify({ length, data: allEntries }));
    } catch (e) {
        console.error(e);
        response.statusCode = 500;
        response.end(JSON.stringify({ length: 0, data: [], errors: 'Something went wrong' }));
    }

}

export default allAvos;