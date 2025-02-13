import { useState } from 'react';

const generalForm = [
  {
    name: 'num_groups',
    label: 'Number of Groups',
    type: 'number',
    default: 1,
    min: 1,
    required: true,
  },
  {
    name: 'tournament_format',
    label: 'Tournament Format',
    type: 'select',
    options: ['Round Robin', 'Group Stage + Elimination', 'Straight Knockout'],
    required: true,
  },
  {
    name: 'sub_match_types',
    label: 'Sub Match Types',
    type: 'dynamic',
    description:
      'Define sub-matches within a team match (e.g., Singles, Doubles, Weightage, Frequency)',
    fields: [
      {
        name: 'match_label',
        label: 'Match Type Label',
        type: 'text',
        placeholder: 'E.g., Singles 1, Doubles 2',
        required: true,
      },
      {
        name: 'match_type',
        label: 'Match Type',
        type: 'select',
        options: ['Singles', 'Doubles'],
        required: true,
      },
      {
        name: 'weightage_points',
        label: 'Weightage Points',
        type: 'number',
        placeholder: 'Points for this match type',
        min: 1,
        required: true,
      },
      {
        name: 'match_frequency',
        label: 'Match Frequency',
        type: 'number',
        placeholder: 'How many times this match type occurs',
        min: 1,
        required: true,
      },
    ],
    add_button: 'Add Match Type',
  },
];

const fixtureManagement = [
  {
    name: 'num_groups',
    label: 'Number of Groups',
    type: 'number',
    default: 1,
    min: 1,
    required: true,
  },
  {
    name: 'tournament_format',
    label: 'Tournament Format',
    type: 'select',
    options: ['Round Robin', 'Group Stage + Elimination', 'Straight Knockout'],
    required: true,
  },
  {
    name: 'sub_match_types',
    label: 'Sub Match Types',
    type: 'dynamic',
    description:
      'Define sub-matches within a team match (e.g., Singles, Doubles, Weightage, Frequency)',
    fields: [
      {
        name: 'match_label',
        label: 'Match Type Label',
        type: 'text',
        placeholder: 'E.g., Singles 1, Doubles 2',
        required: true,
      },
      {
        name: 'match_type',
        label: 'Match Type',
        type: 'select',
        options: ['Singles', 'Doubles'],
        required: true,
      },
      {
        name: 'weightage_points',
        label: 'Weightage Points',
        type: 'number',
        placeholder: 'Points for this match type',
        min: 1,
        required: true,
      },
      {
        name: 'match_frequency',
        label: 'Match Frequency',
        type: 'number',
        placeholder: 'How many times this match type occurs',
        min: 1,
        required: true,
      },
    ],
    add_button: 'Add Match Type',
  },
];

function CreateTournamentForm() {
  const [formData, setFormData] = useState({});
  return (
    <form>
      <input type="text" placeholder="Tournament Name" />
      <button type="submit">Create Tournament</button>
    </form>
  );
}

export default function CreateTournamentPage() {
  return (
    <div>
      <h1>Create Tournament</h1>
      <CreateTournamentForm />
    </div>
  );
}
