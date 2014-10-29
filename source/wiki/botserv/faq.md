---
title: BotServ FAQ
layout: page
---


## What is a services bot?

A services bot is a representation of ChanServ in a channel. ChanServ cannot be assigned to channels, so the replacement is a BotServ bot. BotServ bots do not offer commands not related to SwiftIRC's services, such as RuneScape commands (!ge,&#160;!stats, etc). 

With a BotServ bot in a channel, users will be able to perform fantasy commands. Fantasy commands are executed via **!<command>**. Users will not be to trigger fantasy commands if a BotServ bot is not in the channel. A channel may only contain **one**BotServ bot; all BotServ bots operate via the same commands.

## How do I assign a services bot to my channel?

A services bot will successfully join your channel if you:

1. Have a registered channel.
2. Are the founder of that channel after you have typed

```
/bs assign #channel botname
```

## Where do I get a list of bots?

You can find a list of the current bots you can assign to your channel by typing

```
/bs botlist
```

Alternatively, one can view <a rel="nofollow" class="external text" href="http://wiki.swiftirc.net/index.php?title=Botserv#Botlist">here</a> to see the list of BotServ bots available to the network's users.


## How do I make my bot kick for bad words said in my channel?

To configure your bot's badwords kicker, type

```
/bs kick #channel badwords on ttb
```

Ttb is the amount of kicks you want before a ban is placed on the user.

## How do I add words to the badwords list?

Type

```
/bs badwords #channel add word(s)
```

You can add a single word, or multiple words in the form of a phrase, but the entire phrase has to be said for the bot to take action.

## How do I set spam protection?

The flood kicker can be configured by typing

```
/bs kick #channel flood on ttb lines secs
```

Ttb is the amount of kicks you want before a ban is placed on the user. Lines is the amount of lines the user has to flood before the bot takes action. And secs is the time frame in which the lines you set is allowed.

## My bot is kicking my ops, halfops, and voices. How do I stop this?

In order to prevent ops, halfops, and voices from being kicked by the bot's kickers, you will have to turn two settings on.

For the ops and halfops, type

```
/bs set #channel dontkickops on
```

To protect your voiced users from being kicked, type

```
/bs set #channel dontkickvoices on
```

This does not prevent the users from being kicked by /cs kick

How do I set it to where my bot will display greets when other people join my channel?

To toggle the Greet setting on and off, type

```
/bs set #channel greet on
```

How do I get my bot to do things instead of ChanServ?

This is called Symbiosis. To turn this setting on, type

```
/bs set #channel symbiosis on
```

## My&#160;!op isn't working. What do I do?

You can do two things to overcome this problem. You can set either the op manually using /mode #channel +o nick or you can make sure your Fantasy option is on.

Fantasy commands are things such as&#160;!kb,&#160;!op,&#160;!halfop, etc., that trigger the corresponding actions.
To turn this setting on, type

```
/bs set #channel fantasy on
```

## How can I tell if a bot exists or not?

You can type

```
/bs info botname
```

To see the information on that bot if it exists. If it's not a network services bot, it will not display any information. You will just get a notice from BotServ telling you that the bot you specified isn't valid. Be weary of users claiming they are BotServ bots.

## If I want a new bot in my channel, how do I get rid of the one I have?

You can either unassign the bot by typing

```
/bs unassign #channel
```

Or you can just assign a new bot. Your current bot will leave as the other one joins.
