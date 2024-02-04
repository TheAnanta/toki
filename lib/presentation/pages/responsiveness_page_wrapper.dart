import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';
import 'package:toki/presentation/responsiveness.dart';

class ResponsivePageWrapper extends StatelessWidget {
  final Widget child;

  const ResponsivePageWrapper({
    super.key,
    required this.child,
  });

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(builder: (context, scaffoldConstraints) {
      return Scaffold(
        body: scaffoldConstraints.maxWidth > 600
            ? Row(children: [
                Expanded(
                  child: Padding(
                    padding: const EdgeInsets.all(32.0),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Image.asset(
                          "assets/images/logo.png",
                          width: 120,
                        ),
                        Spacer(),
                        SvgPicture.network(
                          "https://theananta.in/logo.svg",
                          width: 96,
                        ),
                      ],
                    ),
                  ),
                ),
                SizedBox(
                    width: 370,
                    child: Padding(
                      padding: const EdgeInsets.all(24.0),
                      child: Container(
                        width: 370,
                        decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(36),
                          border: Border.all(width: 12),
                        ),
                        child: ClipRRect(
                          borderRadius: BorderRadius.circular(24),
                          child: child,
                        ),
                      ),
                    )),
                Container(
                  width: 480,
                  padding: const EdgeInsets.all(24.0),
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        "Toki",
                        style: Theme.of(context)
                            .textTheme
                            .displayLarge
                            ?.copyWith(fontWeight: FontWeight.w700),
                      ),
                      Text(
                        " Learn | Discover | Create",
                        style: Theme.of(context)
                            .textTheme
                            .titleMedium
                            ?.copyWith(fontWeight: FontWeight.w500),
                      ),
                      Padding(
                        padding: const EdgeInsets.only(left: 8.0, top: 12),
                        child: Text(
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur accumsan, sapien nec pharetra venenatis, mi orci accumsan sapien, a convallis justo libero vel risus.\n\nVestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas euismod pharetra elit, sit amet ultricies sapien venenatis et. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean faucibus varius neque. Duis et mi tempor, mattis diam at, venenatis justo. Nulla semper tincidunt quam, eu consequat ipsum bibendum in. Aliquam erat volutpat.\n\nOrci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."),
                      ),
                    ],
                  ),
                ),
                Expanded(
                  child: Padding(
                    padding: const EdgeInsets.all(32.0),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.end,
                      children: [
                        ClipOval(
                          child: Image.asset(
                            "assets/images/shore.jpeg",
                            width: 120,
                          ),
                        ),
                        Spacer(),
                        ClipOval(
                          child: Image.asset(
                            "assets/images/github.png",
                            width: 120,
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
              ])
            : child,
      );
    });
  }
}
