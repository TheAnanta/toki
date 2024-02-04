import 'package:flutter/material.dart';
import 'package:localization/localization.dart';
import 'package:toki/data/models/onboarding_page_stateholder.dart';
import 'package:toki/presentation/responsiveness.dart';
import 'package:toki/presentation/widgets/onboarding/onboarding_layout.dart';
import 'package:toki/presentation/widgets/toki_elevated_button.dart';

List<OnboardingPageStateholder> onboardingStates = [
  OnboardingPageStateholder(
    primaryActionLabel: "choose-your-character",
    children: [
      const Spacer(),
      Builder(builder: (context) {
        int character = 3;
        return StatefulBuilder(builder: (context, setCharacterState) {
          return SelectionCarousel(
            index: character,
            itemCount: 8,
            itemBuilder: (context, index) {
              return Container(
                color: Colors.red,
              );
            },
            onItemSelected: (index) {
              setCharacterState(() {
                character = index;
                print(index);
              });
            },
          );
        });
      }),
    ],
    backgroundHeight: 64,
  ),
  OnboardingPageStateholder(
    primaryActionLabel: "choose-your-native-language",
    children: [
      SizedBox(
        height: getResponsiveHeight(36),
      ),
      Builder(builder: (context) {
        int character = 3;
        return StatefulBuilder(builder: (context, setCharacterState) {
          return SelectionCarousel(
            index: character,
            itemCount: 8,
            itemBuilder: (context, index) {
              return Container(
                color: Colors.red,
              );
            },
            onItemSelected: (index) {
              setCharacterState(() {
                character = index;
                print(index);
              });
            },
            height: 141,
            viewportFraction: 0.35,
          );
        });
      }),
      SizedBox(
        height: getResponsiveHeight(42),
      ),
      Builder(builder: (context) {
        return Text(
          "choose-your-motivation".i18n().split("\n")[0],
          textAlign: TextAlign.center,
          style: Theme.of(context).textTheme.bodyMedium?.copyWith(
                color: const Color(0xFF97B0CF),
                fontSize: getResponsiveHeight(14),
                fontWeight: FontWeight.w500,
              ),
        );
      }),
      Builder(builder: (context) {
        return Text(
          "choose-your-motivation".i18n().split("\n")[1].toUpperCase(),
          textAlign: TextAlign.center,
          style: Theme.of(context).textTheme.bodyMedium?.copyWith(
                color: const Color(0xFF33A1FF),
                fontSize: getResponsiveHeight(20),
                fontWeight: FontWeight.w500,
                letterSpacing: getResponsiveWidth(-0.05),
              ),
        );
      }),
      const Spacer(),
    ],
    backgroundHeight: 563,
  ),
  OnboardingPageStateholder(
    primaryActionLabel: "choose-your-academic-level",
    children: [
      SizedBox(
        height: getResponsiveHeight(16),
      ),
      Builder(builder: (context) {
        return Text(
          "if-dont-know-your-level".i18n(),
          style: Theme.of(context).textTheme.bodyLarge?.copyWith(
                fontSize: getResponsiveHeight(16),
                color: const Color(0xFF5E5E5E),
                fontWeight: FontWeight.w400,
                letterSpacing: getResponsiveWidth(0.05),
              ),
        );
      }),
      SizedBox(
        height: getResponsiveHeight(25),
      ),
      TokiElevatedButton(
        gradient: const LinearGradient(colors: [
          Color(0xFF8EE048),
          Color(0xFF64CC5D),
        ]),
        shadowGradient: const LinearGradient(colors: [
          Color(0xFF7CCB38),
          Color(0xFF50C243),
        ]),
        onPressed: () {},
        label: "Begin the test".toUpperCase(),
        width: 300,
        labelSize: 20,
      ),
      const Spacer(),
    ],
    backgroundHeight: 563,
  ),
  const OnboardingPageStateholder(
    primaryActionLabel: "choose-your-goal",
    children: [
      Spacer(),
    ],
    backgroundHeight: 764,
  ),
];
