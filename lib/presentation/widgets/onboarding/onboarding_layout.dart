import 'package:flutter/material.dart';
import 'package:flutter_swiper_view/flutter_swiper_view.dart';
import 'package:localization/localization.dart';
import 'package:toki/presentation/responsiveness.dart';
import 'package:toki/presentation/widgets/toki_button.dart';

class OnboardingLayout extends StatelessWidget {
  final int pageIndex;
  final String primaryActionLabel;
  final List<Widget> children;
  final Function() navigateToPreviousPage;
  final Function() navigateToNextPage;
  final double backgroundHeight;
  const OnboardingLayout({
    super.key,
    this.pageIndex = 1,
    this.primaryActionLabel = "\n",
    this.backgroundHeight = 60,
    this.children = const [
      Spacer(),
    ],
    required this.navigateToPreviousPage,
    required this.navigateToNextPage,
  });

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        children: [
          Positioned(
            left: 0,
            right: 0,
            bottom: 0,
            child: Container(
              width: double.infinity,
              height: getResponsiveHeight(backgroundHeight + 80),
              color: Color(0xFFF1F8FE),
            ),
          ),
          Positioned(
            top: getResponsiveHeight(-27),
            width: getResponsiveWidth(86),
            height: getResponsiveHeight(125),
            right: getResponsiveWidth(-14),
            child: Text(
              pageIndex.toString(),
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
                  primaryActionLabel.i18n().split("\n")[0],
                  textAlign: TextAlign.center,
                  style: Theme.of(context).textTheme.bodyMedium?.copyWith(
                        color: const Color(0xFF97B0CF),
                        fontSize: getResponsiveHeight(14),
                        fontWeight: FontWeight.w500,
                      ),
                ),
                Text(
                  primaryActionLabel.i18n().split("\n")[1].toUpperCase(),
                  textAlign: TextAlign.center,
                  style: Theme.of(context).textTheme.bodyMedium?.copyWith(
                        color: const Color(0xFF33A1FF),
                        fontSize: getResponsiveHeight(20),
                        fontWeight: FontWeight.w500,
                        letterSpacing: getResponsiveWidth(-0.05),
                      ),
                ),
                ...children,
                Row(
                  children: [
                    ...(pageIndex == 1
                        ? []
                        : [
                            Expanded(
                              child: TokiIconButton(
                                isFullWidth: pageIndex == 1,
                                icon: Icons.chevron_left_rounded,
                                onPressed: navigateToPreviousPage,
                                color: Colors.white,
                                iconColor: const Color(0xFF97B0CF),
                                shadow: BoxShadow(
                                  color:
                                      const Color(0xFF000000).withOpacity(0.05),
                                  offset: Offset(
                                    0,
                                    getResponsiveHeight(4),
                                  ),
                                  blurRadius: getResponsiveHeight(8),
                                  spreadRadius: getResponsiveWidth(3),
                                ),
                              ),
                            ),
                            SizedBox(
                              width: getResponsiveWidth(24),
                            ),
                          ]),
                    Expanded(
                      flex: 3,
                      child: TokiTextButton(
                        isFullWidth: pageIndex == 1,
                        label: "Next",
                        onPressed: navigateToNextPage,
                        gradient: const LinearGradient(
                          colors: [
                            Color(0xFF1CCBFA),
                            Color(0xFF519FFA),
                          ],
                        ),
                      ),
                    ),
                  ],
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

class SelectionCarousel extends StatelessWidget {
  final Widget Function(BuildContext, int) itemBuilder;
  final int index;
  final int itemCount;
  final Function(int) onItemSelected;
  final double height;
  final double viewportFraction;
  const SelectionCarousel({
    super.key,
    required this.index,
    required this.itemCount,
    required this.itemBuilder,
    required this.onItemSelected,
    this.height = 109,
    this.viewportFraction = 0.3,
  });

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: getResponsiveHeight(height),
      child: Swiper(
        itemCount: itemCount,
        itemBuilder: (context, index) {
          return Container(
            padding: EdgeInsets.only(bottom: getResponsiveHeight(21)),
            child: SelectionItemWidget(
              selected: index == this.index,
              child: itemBuilder(context, index),
              size: height - 21,
            ),
          );
        },
        onIndexChanged: onItemSelected,
        index: index,
        scrollDirection: Axis.horizontal,
        viewportFraction: viewportFraction,
        scale: 0.2,
      ),
    );
  }
}

class SelectionItemWidget extends StatelessWidget {
  final Clip clip;
  final Widget child;
  final bool selected;
  final double size;
  const SelectionItemWidget({
    super.key,
    this.clip = Clip.antiAlias,
    required this.child,
    required this.selected,
    this.size = 80,
  });

  @override
  Widget build(BuildContext context) {
    return Stack(
      clipBehavior: Clip.none,
      children: [
        Container(
          decoration: BoxDecoration(
            boxShadow: [
              selected
                  ? BoxShadow(
                      color: const Color(0xFF000000).withOpacity(0.08),
                      offset: Offset(
                        0,
                        getResponsiveHeight(6),
                      ),
                      blurRadius: getResponsiveHeight(8),
                      spreadRadius: getResponsiveWidth(3),
                    )
                  : BoxShadow(
                      color: const Color(0xFF000000).withOpacity(0.05),
                      offset: Offset(
                        0,
                        getResponsiveHeight(4),
                      ),
                      blurRadius: 2)
            ],
            color: Color(0xFFD9D9D9),
            shape: BoxShape.circle,
            border: Border.all(
              width: getResponsiveHeight((4 * size) / 80),
              color: Colors.white,
            ),
          ),
          child: ClipOval(
            child: child,
            clipBehavior: clip,
          ),
          height: getResponsiveHeight(size),
          width: getResponsiveHeight(size),
        ),
        selected
            ? Positioned(
                top: 0,
                right: getResponsiveHeight(28),
                child: Container(
                  child: Icon(
                    Icons.check_outlined,
                    color: const Color(0xFF83E647),
                    size: getResponsiveHeight(24),
                    weight: 700,
                  ),
                  width: getResponsiveHeight((36 * size) / 80),
                  height: getResponsiveHeight((36 * size) / 80),
                  decoration: BoxDecoration(
                      color: Colors.white, shape: BoxShape.circle),
                ),
              )
            : SizedBox(),
      ],
    );
  }
}
