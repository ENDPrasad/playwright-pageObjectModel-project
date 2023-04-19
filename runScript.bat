@echo off
start npx playwright test fixtureTest -- headed exit
timeout 10
start npx playwright test test -- headed exit
