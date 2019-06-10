# outofoffice
A script to generate out-of-office text to use in my Outlook autoresponder.

## How do I use this?

1. Clone this repo down and `cd` into the directory.
2. `npm install`
3. `npx outofoffice [startDate] [endDate]` (if you have a recent install of npm/node)

### Example usage

```
mugwort:outofoffice bactroid npx outofoffice 2019-06-11 2019-06-12
I will be out of the office from Tuesday, June 11, through Wednesday, June 12.

For immediate assistance, please reach out the UF Computing Help Desk at 352-392-4357. Their service desk will create a support ticket and will get in touch with UFIT personnel who can assist you in my absence.
mugwort:outofoffice bactroid npx outofoffice 2019-06-11
I will be out of the office on Tuesday, June 11.

For immediate assistance, please reach out the UF Computing Help Desk at 352-392-4357. Their service desk will create a support ticket and will get in touch with UFIT personnel who can assist you in my absence.
```
