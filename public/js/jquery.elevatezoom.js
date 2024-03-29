(function (c) {
  function f(c) {
    window.console && console.log(c);
  }
  c.fn.simpleLens = function (l) {
    var d = c.extend({}, c.fn.simpleLens.defaults, l),
      h = {
        init: function (a) {
          this.height = a.height();
          this.width = a.width();
          this.offset = a.offset();
          this.position = a.position();
          this.calc_image_limits();
        },
        calc_image_limits: function () {
          this.limits = {
            x_left: this.position.left,
            x_right: this.position.left + this.width,
            y_top: this.position.top,
            y_bottom: this.position.top + this.height,
          };
        },
        calc_view_position: function (a) {
          return {
            org_x: a.pageX - this.offset.left,
            org_y: a.pageY - this.offset.top,
          };
        },
      },
      e = {
        init: function (a, b, c, d) {
          this.parent_anchor = a;
          this.lens_container = b;
          this.ratio = c;
          this.cursor_position = { top: 0, left: 0 };
          this.calc_cursor_size();
          this.insert_cursor(d.org_x, d.org_y);
        },
        destroy: function () {
          c("." + d.cursor_class).remove();
        },
        calc_cursor_size: function () {
          this.cursor_height = this.lens_container.height() / this.ratio.x;
          this.cursor_width = this.lens_container.width() / this.ratio.y;
          this.height_center = this.cursor_height / 2;
          this.width_center = this.cursor_width / 2;
        },
        update_cursor_position: function (a, b) {
          var c = b - this.height_center,
            d = b + this.height_center,
            e = a - this.width_center,
            f = a + this.width_center,
            g = h.limits;
          parseFloat(g.y_top) > parseFloat(c)
            ? (c = g.y_top)
            : parseFloat(d) > parseFloat(g.y_bottom) &&
              (c = g.y_bottom - this.cursor_height);
          parseFloat(g.x_left) > parseFloat(e)
            ? (e = g.x_left)
            : parseFloat(f) > parseFloat(g.x_right) &&
              (e = g.x_right - this.cursor_width);
          this.cursor_position = {
            top: c,
            left: e,
            center_top: c + this.height_center,
            center_left: e + this.width_center,
          };
          void 0 !== this.cursor && this.cursor.css(this.cursor_position);
        },
        insert_cursor: function (a, b) {
          this.cursor = c("<div>", { class: d.cursor_class });
          this.cursor.css({
            height: this.cursor_height + "px",
            width: this.cursor_width + "px",
          });
          this.cursor.appendTo(this.parent_anchor);
          return this.update_cursor_position(a, b);
        },
      },
      k = {
        init: function (a) {
          this.parent_anchor = a;
          this.parent_div = a.parent(d.parent_class);
          this.lens_image_url = a.attr(d.lens_image_attr);
          this.lens_container = c("<div>", { class: d.lens_class });
          this.lens_image = c("<img>");
          h.init(a.find(d.big_image_class));
          void 0 === this.lens_image_url &&
            (f("Cannot find lens image. URL: " + this.lens_image_url),
            f(that),
            f(a),
            f(lens_image_url));
        },
        update_lens_position: function (a) {
          this.lens_image.css({ top: a.top, left: a.left });
        },
        calc_lens_position: function (a) {
          return {
            left: -1 * (a.center_left * this.ratio.x - this.container.width),
            top: -1 * (a.center_top * this.ratio.y - this.container.height),
          };
        },
        lens_event_bind: function () {
          var a = this;
          this.parent_anchor.mousemove(function (b) {
            b = h.calc_view_position(b);
            e.update_cursor_position(b.org_x, b.org_y);
            a.update_lens_position(
              a.calc_lens_position(e.cursor_position, a.ratio, a.container),
            );
          });
        },
        lens_event_unbind: function () {
          void 0 !== this.parent_anchor &&
            this.parent_anchor.unbind("mousemove");
        },
        destroy: function () {
          e.destroy();
          void 0 !== this.lens_container &&
            0 < this.lens_container.length &&
            (c("." + d.lens_class).remove(), this.lens_event_unbind());
        },
        load: function (a) {
          var b = this;
          this.lens_container.appendTo(this.parent_div);
          var f = this.lens_container.height() / 2 - 25,
            f = c("<img>", { src: d.loading_image }).css("margin-top", f);
          this.lens_container.html(f);
          this.lens_image
            .load(function () {
              b.lens_container.html(b.lens_image);
              b.container = {
                width: b.lens_container.width() / 2,
                height: b.lens_container.height() / 2,
              };
              b.img_size = {
                width: b.lens_image.width(),
                height: b.lens_image.height(),
              };
              b.ratio = {
                y: b.lens_image.height() / h.height,
                x: b.lens_image.width() / h.width,
              };
              var c = h.calc_view_position(a);
              e.init(b.parent_anchor, b.lens_container, b.ratio, c);
              b.update_lens_position(b.calc_lens_position(e.cursor_position));
              b.lens_event_bind();
            })
            .attr("src", this.lens_image_url);
        },
      };
    c(this)
      .parents(d.parent_class)
      .on(d.open_lens_event, d.anchor_parent_class, function (a) {
        var b = c(this);
        k.init(b);
        k.load(a);
      });
    c(this)
      .parents(d.parent_class)
      .on("mouseleave", d.anchor_parent_class, function () {
        k.destroy();
      });
  };
  c.fn.simpleLens.ver = function () {
    return "simpleLens-1.0.1";
  };
  c.fn.simpleLens.defaults = {
    anchor_parent_class: ".simpleLens-lens-image",
    lens_image_attr: "data-lens-image",
    big_image_class: ".simpleLens-big-image",
    parent_class: ".simpleLens-big-image-container",
    lens_class: "simpleLens-lens-element",
    cursor_class: "simpleLens-mouse-cursor",
    loading_image: "images/loading.gif",
    open_lens_event: "mouseenter",
  };
})(jQuery);
