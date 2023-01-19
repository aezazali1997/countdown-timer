#! /usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const delay = (delayInms) => {
    return new Promise(resolve => setTimeout(resolve, delayInms));
};
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const counterDate = readline_sync_1.default.question('Enter date for counter(hh-mm-ss)');
    const arrDate = counterDate.split('-');
    let seconds = +arrDate[2];
    let minutes = +arrDate[1];
    let hours = +arrDate[0];
    while (seconds >= 0 && minutes >= 0 && hours >= 0) {
        seconds--;
        yield delay(1000);
        console.log('HH ', hours, ' MM ', minutes, ' SS ', seconds);
        if (seconds === 0 && minutes > 0) {
            minutes--;
            seconds = 59;
        }
        if (minutes === 0 && hours >= 0 && seconds === 0) {
            hours--;
            minutes = 59;
            seconds = 59;
        }
    }
});
main();
// decrease the soend until it reaches zero
// when secodns reaches zero decrease the mm
// if minute reaches zero decrease hour
// if hour reaches zero stop the timer 
