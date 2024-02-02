import 'package:flutter/material.dart';

class Responsiveness {
  static late BuildContext context;
  static init(BuildContext rContext) {
    context = rContext;
  }
}

bool isSmallScreen() {
  return MediaQuery.of(Responsiveness.context).size.width < 600;
}

bool isMediumScreen() {
  return MediaQuery.of(Responsiveness.context).size.width >= 600 &&
      MediaQuery.of(Responsiveness.context).size.width < 840;
}

bool isLargeScreen() {
  return MediaQuery.of(Responsiveness.context).size.width >= 840;
}

bool isExtraLargeScreen() {
  return MediaQuery.of(Responsiveness.context).size.width >= 1200;
}

double getResponsiveWidth(double width) {
  return (MediaQuery.of(Responsiveness.context).size.width * width) / 390;
}

double getResponsiveHeight(double height) {
  return (MediaQuery.of(Responsiveness.context).size.height * height) / 844;
}
