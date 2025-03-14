import { Image, StyleSheet, Platform, View, Pressable } from 'react-native';
import React, { useState, useEffect } from 'react';

import { Note, PlayableNote } from '@/types/MusicTypes';
import { OctaveNotes } from '@/constants/OctaveNotes';

import { Keyboard } from '@/components/Keyboard';
import { Stave } from '@/components/Stave'
import OptionsProvider from '@/components/contexts/OptionsContext';
import { useOptions } from '@/components/contexts/OptionsContext';
import MusicPage from '@/components/MusicPage';

export default function HomeScreen() {

  return (
    <>
      <OptionsProvider>
        <View style={styles.stepContainer}></View>
        <MusicPage />
      </OptionsProvider>
    </>
  );
}

const styles = StyleSheet.create({

  stepContainer: {
    gap: 8,
    marginBottom: 20,
  },
});
