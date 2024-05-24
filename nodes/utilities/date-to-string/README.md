---
hide_title: true
hide_table_of_contents: true
title: Date To String node
---

{/*##head##*/}

# Date To String

This node translates a <span className="ndl-data">date</span> type input and outputs a <span className="ndl-data">string</span> based on your specified format.

<div className="ndl-image-with-background l">

![](/nodes/utilities/date-to-string/date-to-string.png)

</div>

The format is specified as a <span className="ndl-data">string</span> that can include the following special syntax: `{date}`, `{month}`, `{monthShort}`, `{year}`, `{hours}`, `{minutes}` and `{seconds}`.

{/*##head##*/}

- `{date}` The numeric date part.
- `{month}` The numeric month 1 = January, 12 = December.
- `{monthShort}` The numeric month 1 = Jan, 12 = Dec.
- `{year}` The numeric year.
- `{hours}` The numeric hour, between 0..23
- `{minutes}` The numeric minute, between 0..60
- `{seconds}` The numeric second, between 0..60

The default format is this:

```
{year}-{month}-{date}
```

### Examples

#### Standard Date Format:

```
{year}-{month}-{date}
```

Output: 2024-05-24

#### Full Date and Time:

```
{year}-{month}-{date} {hours}:{minutes}:{seconds}
```

Output: 2024-05-24 14:30:15

#### Short Month Name with Date:

```
{date}-{monthShort}-{year}
```

Output: 24-May-2024

#### Time Only:

```
{hours}:{minutes}:{seconds}
```

Output: 14:30:15

#### Date and Time with Short Month:

```
{date}/{monthShort}/{year} {hours}:{minutes}
```

Output: 24/May/2024 14:30

#### Year and Month Only:

```
{year}/{month}
```

Output: 2024/05

#### Full Date in Slashes:

```
{date}/{month}/{year}
```

Output: 24/05/2024

## Inputs

<div className="ndl-table-35-65">

| Data                                     | Description                                                          |
| ---------------------------------------- | -------------------------------------------------------------------- |
| <span className="ndl-data">Format</span> | This is where the format string is specified, see above for details. |
| <span className="ndl-data">Date</span>   | The date input to format.                                            |

</div>

## Outputs

<div className="ndl-table-35-65">

| Data                                            | Description                |
| ----------------------------------------------- | -------------------------- |
| <span className="ndl-data">\*Date String</span> | The formatted date string. |

| Signal                                           | Description                                            |
| ------------------------------------------------ | ------------------------------------------------------ |
| <span className="ndl-signal">Date Changed</span> | Sends a signal when the formatted date string changed. |

</div>
