import 'package:flutter/material.dart';
import 'package:localization/localization.dart';
import 'package:toki/presentation/responsiveness.dart';

class OnboardingLayout extends StatelessWidget {
  const OnboardingLayout({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        children: [
          Positioned(
            top: getResponsiveHeight(-27),
            width: getResponsiveWidth(86),
            height: getResponsiveHeight(125),
            right: getResponsiveWidth(-14),
            child: Text(
              "3",
              style: Theme.of(context).textTheme.titleLarge?.copyWith(
                    color: const Color(0xFFEDF6FF),
                    fontSize: getResponsiveHeight(120),
                    fontWeight: FontWeight.w700,
                  ),
            ),
          ),
          SizedBox(
            width: double.infinity,
            child: Column(
                crossAxisAlignment: CrossAxisAlignment.center,
                children: [
                  SizedBox(
                    height: getResponsiveHeight(56),
                  ),
                  Text(
                    "choose-your-character".i18n().split("\n")[0],
                    textAlign: TextAlign.center,
                    style: Theme.of(context).textTheme.bodyMedium?.copyWith(
                          color: const Color(0xFF97B0CF),
                          fontSize: getResponsiveHeight(14),
                          fontWeight: FontWeight.w500,
                        ),
                  ),
                  Text(
                    "choose-your-character".i18n().split("\n")[1].toUpperCase(),
                    textAlign: TextAlign.center,
                    style: Theme.of(context).textTheme.bodyMedium?.copyWith(
                          color: const Color(0xFF33A1FF),
                          fontSize: getResponsiveHeight(20),
                          fontWeight: FontWeight.w500,
                          letterSpacing: getResponsiveWidth(-0.05),
                        ),
                  ),
                ]),
          ),
        ],
      ),
    );
  }
}
