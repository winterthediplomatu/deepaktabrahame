/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';
const {UserData} = require('facebook-nodejs-business-sdk');
const {describe} = require('mocha');
const sha256 = require('js-sha256');
const { expect } = require('chai');

describe('UserData', function() {
    describe('normalize', function() {
        it('F5 Name field should normalize and hash first 5 characters', function() {

            // Arrange
            const testNameField = 'smith';
            const userData = (new UserData()).setF5First(testNameField);

            // Act
            const normalizedUserData = userData.normalize();

            // Assert
            expect(normalizedUserData.f5first).to.equal(sha256(testNameField));
        });

        it('F5 Name field, for a long name, should normalize and hash only first 5 characters', function() {

            // Arrange
            const testNameField = 'smithsonian';
            const userData = (new UserData()).setF5First(testNameField);

            // Act
            const normalizedUserData = userData.normalize();

            // Assert
            const actual = normalizedUserData.f5first;
            const expected = sha256(testNameField.substring(0,5));
            expect(actual).to.equal(expected);
        });

        it('First Initial field should normalize and hash only the first character', function() {

            // Arrange
            const fi = 'john smith';
            const userData = (new UserData()).setFi(fi);

            // Act
            const normalizedUserData = userData.normalize();

            // Assert
            const actual = normalizedUserData.fi;
            const expected = sha256(fi.charAt(0));
            expect(actual).to.equal(expected);
        });

        it('dobd gets normalized', function() {
            const cases = [
                ['1', '01'],
                ['09', '09'],
                ['31', '31'],
            ];

            cases.forEach(pair => {
                const value = pair[0];
                const expected = pair[1];
                const userData = (new UserData()).setDobd(value);
                expect(userData.normalize().dobd).to.equal(sha256(expected));
            });
        });

        it('throws an error when dobd is not valid', function() {
            const cases = ['0', '32', '-1', '0a'];

            cases.forEach(value => {
                const userData = (new UserData()).setDobd(value);
                expect(() => userData.normalize()).to.throw(Error);
            });
        });

        it('dobm gets normalized', function() {
            const cases = [
                ['1', '01'],
                ['09', '09'],
                ['12', '12'],
            ];

            cases.forEach(pair => {
                const value = pair[0];
                const expected = pair[1];
                const userData = (new UserData()).setDobm(value);
                expect(userData.normalize().dobm).to.equal(sha256(expected));
            });
        });

        it('throws an error when dobm is not valid', function() {
            const cases = ['0', '13', '-1', '0a'];

            cases.forEach(value => {
                const userData = (new UserData()).setDobm(value);
                expect(() => userData.normalize()).to.throw(Error);
            });
        });

        it('doby gets normalized', function() {
            const cases = [
                ['1900', '1900'],
                ['0000', '0000'],
                ['9999', '9999'],
            ];

            cases.forEach(pair => {
                const value = pair[0];
                const expected = pair[1];
                const userData = (new UserData()).setDoby(value);
                expect(userData.normalize().doby).to.equal(sha256(expected));
            });
        });

        it('throws an error when doby is not valid', function() {
            const cases = ['0', '12345', '-1', '199a'];

            cases.forEach(value => {
                const userData = (new UserData()).setDoby(value);
                expect(() => userData.normalize()).to.throw(Error);
            });
        });
    });
});
