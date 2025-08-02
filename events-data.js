const eventsData = [
    {
        "name": "IA Player Breaks Block",
        "event_lines": [
            "ia player breaks block"
        ],
        "triggers": "when a player breaks a custom block from ItemsAdder.",
        "generated_examples": [
            "on ia player breaks block:",
            "after ia player breaks block:"
        ],
        "switches": [
            "namespaced:<namespaced> - to match a specific ItemsAdder namespaced ID (e.g., 'my_pack:').",
            "id:<id> - to match a specific ItemsAdder item ID (e.g., 'my_block').",
            "with:<item> - to only process the event when the item in the player's hand matches a specified item."
        ],
        "contexts": [
            "<player> returns the PlayerTag of the player.",
            "<context.item_in_hand> returns the ItemTag of the item in hand.",
            "<context.namespaced> returns the ElementTag of the ItemsAdder namespaced ID.",
            "<context.id> returns the ElementTag of the ItemsAdder item ID.",
            "<context.location> returns the LocationTag the block was broken at.",
            "<context.material> returns the MaterialTag of the block that was broken.",
            "<context.ia_item> returns the ItemTag of an item from ItemsAdder (the custom block item)."
        ],
        "cancellable": true,
        "has_location": true,
        "group": "Block",
        "source": "https://github.com/codylamer/ItemsWeaver/blob/main/src/main/java/com/codylamer/itemsweaver/events/CustomBlockBreakScriptEvent.java"
    },
    {
        "name": "IA Player Interacts Block",
        "event_lines": [
            "ia player interact block"
        ],
        "triggers": "when a player interacts with a custom block from ItemsAdder.",
        "generated_examples": [
            "on ia player interact block:",
            "after ia player interact block:"
        ],
        "switches": [
            "namespaced:<namespaced> - to match a specific ItemsAdder namespaced ID.",
            "id:<id> - to match a specific ItemsAdder item ID.",
            "using:<hand> - to only process the event when the player used a specific hand (e.g., 'main', 'off_hand').",
            "action:<action> - to match a specific interaction action (e.g., 'right_click', 'left_click').",
            "face:<face> - to match the block face that was clicked (e.g., 'top', 'bottom').",
            "with:<item> - to only process the event when the item used for interaction matches a specified item."
        ],
        "contexts": [
            "<context.player> returns the PlayerTag of the player.",
            "<context.location> returns the LocationTag of the interacted block.",
            "<context.namespaced> returns the ElementTag of the ItemsAdder namespaced ID.",
            "<context.id> returns the ElementTag of the ItemsAdder item ID.",
            "<context.material> returns the MaterialTag of the interacted block.",
            "<context.action> returns the ElementTag of the interaction action.",
            "<context.item_in_hand> returns the ItemTag of the item used for interaction.",
            "<context.face> returns the ElementTag of the block face clicked.",
            "<context.hand> returns the ElementTag of the hand used (e.g., 'main_hand', 'off_hand').",
            "<context.ia_item> returns the ItemTag of an item from ItemsAdder (the custom block item)."
        ],
        "cancellable": true,
        "has_location": true,
        "group": "Block",
        "source": "https://github.com/codylamer/ItemsWeaver/blob/main/src/main/java/com/codylamer/itemsweaver/events/CustomBlockInteractScriptEvent.java"
    },
    {
        "name": "IA Player Places Block",
        "event_lines": [
            "ia player places block"
        ],
        "triggers": "when a player places a custom block from ItemsAdder.",
        "generated_examples": [
            "on ia player places block:",
            "after ia player places block:"
        ],
        "switches": [
            "namespaced:<namespaced> - to match a specific ItemsAdder namespaced ID.",
            "id:<id> - to match a specific ItemsAdder item ID.",
            "against:<material> - to only process the event when the block was placed against a specific material."
        ],
        "contexts": [
            "<player> returns the PlayerTag of the player.",
            "<context.location> returns the LocationTag where the block was placed.",
            "<context.namespaced> returns the ElementTag of the ItemsAdder namespaced ID.",
            "<context.id> returns the ElementTag of the ItemsAdder item ID.",
            "<context.material> returns the MaterialTag of the block that was placed.",
            "<context.old_material> returns the MaterialTag of the material the block was placed against.",
            "<context.item_in_hand> returns the ItemTag of the item used to place the block.",
            "<context.ia_item> returns the ItemTag of an item from ItemsAdder (the custom block item).",
            "<context.can_build> returns whether the player is allowed to build here (ElementTag of boolean).",
            "<context.old_block_state> returns the old block state (ElementTag of String).",
            "<context.against> returns the LocationTag of the block the new block was placed against."
        ],
        "cancellable": true,
        "has_location": true,
        "group": "Block",
        "source": "https://github.com/codylamer/ItemsWeaver/blob/main/src/main/java/com/codylamer/itemsweaver/events/CustomBlockPlaceScriptEvent.java"
    },
    {
        "name": "Load Data",
        "event_lines": [
            "ia load data (because <'cause'>)"
        ],
        "triggers": "when ItemsAdder finishes loading its data after a server start or reload.",
        "generated_examples": [
            "on ia load data:",
            "after ia load data:"
        ],
        "switches": [],
        "contexts": [
            "<context.cause> returns the ElementTag describing why the data was loaded (e.g., 'reload', 'startup')."
        ],
        "cancellable": false,
        "has_location": false,
        "group": "Server",
        "source": "https://github.com/codylamer/ItemsWeaver/blob/main/src/main/java/com/codylamer/itemsweaver/events/LoadDataScriptEvent.java"
    },
    {
        "name": "Pack Compressed",
        "event_lines": [
            "ia resourcepack compressed"
        ],
        "triggers": "when an ItemsAdder resource pack is successfully compressed.",
        "generated_examples": [
            "on ia resourcepack compressed:",
            "after ia resourcepack compressed:"
        ],
        "switches": [],
        "contexts": [],
        "cancellable": false,
        "has_location": false,
        "group": "Resource Pack",
        "source": "https://github.com/codylamer/ItemsWeaver/blob/main/src/main/java/com/codylamer/itemsweaver/events/PackCompressedScriptEvent.java"
    },
    {
        "name": "Player Emote End",
        "event_lines": [
            "ia player finish <emote> (because <cause>)"
        ],
        "triggers": "when a player finishes an ItemsAdder emote.",
        "generated_examples": [
            "on ia player finish emote:",
            "on ia player finish some_emote_id:",
            "on ia player finish emote because stop:",
            "on ia player finish some_emote_id because finished:"
        ],
        "switches": [],
        "contexts": [
            "<player> returns the PlayerTag of the player.",
            "<context.emote> returns the ElementTag of the emote's ID.",
            "<context.cause> returns the ElementTag describing why the emote ended ('FIRST_LOAD' or 'RELOAD')."
        ],
        "cancellable": false,
        "has_location": false,
        "group": "Player",
        "source": "https://github.com/codylamer/ItemsWeaver/blob/main/src/main/java/com/codylamer/itemsweaver/events/PlayerEmoteEndScriptEvent.java"
    },
    {
        "name": "Player Emote Play",
        "event_lines": [
            "ia player play <emote>"
        ],
        "triggers": "when a player starts playing an ItemsAdder emote.",
        "generated_examples": [
            "on ia player play emote:",
            "on ia player play some_emote_id:"
        ],
        "switches": [],
        "contexts": [
            "<player> returns the PlayerTag of the player.",
            "<context.emote> returns the ElementTag of the emote's ID."
        ],
        "cancellable": true,
        "has_location": false,
        "group": "Player",
        "source": "https://github.com/codylamer/ItemsWeaver/blob/main/src/main/java/com/codylamer/itemsweaver/events/PlayerEmotePlayScriptEvent.java"
    },
    {
        "name": "Resource Pack Send",
        "event_lines": [
            "ia send resourcepack to player"
        ],
        "triggers": "when an ItemsAdder resource pack is sent to a player.",
        "generated_examples": [
            "on ia send resourcepack to player:",
            "after ia send resourcepack to player:"
        ],
        "switches": [],
        "contexts": [
            "<player> returns the PlayerTag of the player.",
            "<context.url> returns the ElementTag of the resource pack URL.",
            "<context.hash> returns the ElementTag of the resource pack hash.",
            "<context.is_ia_resourcepack> returns whether the sent pack is an ItemsAdder resource pack (ElementTag of boolean)."
        ],
        "cancellable": false,
        "has_location": false,
        "group": "Resource Pack",
        "source": "https://github.com/codylamer/ItemsWeaver/blob/main/src/main/java/com/codylamer/itemsweaver/events/ResourcePackSendScriptEvent.java"
    }
];