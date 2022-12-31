# Set

Set is a data structure that doesn't allow duplicate values to be contained within it. Here we will use an array-based set. The difference between a regular array with this set is that all elements in the set must be unique.

Insertion is slower for sets rather than regular arrays. In the worst-case scenario, inserting a value to a set takes 2N + 1 steps, while insertion for a regular array only takes N + 1 steps. That's because the computer needs to search through N elements to ensure that the set doesn’t already contain the value we want to insert.

## Operations

These are the common ways we might interact with the data structure:

- Read
- Search
- Insert
- Delete

## Time Complexity

|  Read  | Search (Linear Search) | Insert | Delete |
| :----: | :--------------------: | :----: | :----: |
| $O(1)$ |         $O(N)$         | $O(N)$ | $O(N)$ |
