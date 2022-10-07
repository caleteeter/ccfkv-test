import { expect } from 'chai';
import '@microsoft/ccf-app/polyfill.js';
import { addData, IDataDefinition, IResponse } from '../src/corekv';

describe('Data elemenet tests', () => {
    let data: IDataDefinition;

    before(() => {
        data = JSON.parse('{"id":"id1","name":"name1"}');
    });

    it('Should return true if new data element created', () => {
        let result: IResponse = addData(data);
        expect(result.message).to.equal('Data element created successfully.');
    });

})