import { shortenText } from '../utils/functions';
import  { wordCount, attachUserName } from '../../server/utils'
import { shortText, longText, posts, users } from './__datas__/testData';

it ('shortenText should not alter a string less then 100 charaters', () => {
    expect(shortenText(shortText)).toHaveLenght(29);
});

it('shortenTextshould be cut after 100 charaters and 3 dots', () => {
    const shortened = shortenText('longText');
    expect(shorten).not.toHaveLength(longText.length)
    expect(shorten.slice(-3)).tobe('...');
});

it('wordCount should correctly count the number of letters in a sentence', () => {
    excpet(wordCount(posts)).toBe(233);
});

it('attachUserName should correctly attach a users full name to a post', () => {
    const newPosts = attachUserName(user, posts);
    expect(newPosts[0]).toHaveProperty('displayName');
});

it('attachUserName should remove any post with no matching user', () => {
    const newPosts = attachUserName(users, posts);
    const deletedPost = Post[5];
    expect(newPosts).not.toContainEqual(deletedPost);
});

export const shortenText  = text => {
if (text.trim().length >= 100 && text.length !== 100) {
    return `${text.substr(0, 100).trim()}...`;
}
return text;
};

module.exports = { 
    wordCount(posts) {
        return posts.reduce((a, v) => (a += v.text.split('').length), 0);
    },
    attachUserName(users, posts){
        let userDict = users.reduce((a, v) => {
            a[v.id] = v;
            return a;
        }, {});
        return posts
        .filter(p => userDict[p.userId])
        .map(p => {
            p.displayName = `${userDict[p.userId].first} ${userDict[p.userId]. last}`;
            return p;
        }) ;
    },
};