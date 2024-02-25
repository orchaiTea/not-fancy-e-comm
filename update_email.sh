#!/bin/bash

# Define the old and new email addresses
OLD_EMAIL="PushkarTripathi@proton.me"
NEW_EMAIL="pushkar.moonscape794@passfwd.com"

# Update the email address in commit metadata
git filter-repo --email-callback "
    if email == b'$OLD_EMAIL':
        return email.replace(b'$OLD_EMAIL', b'$NEW_EMAIL')
    return email
" --force