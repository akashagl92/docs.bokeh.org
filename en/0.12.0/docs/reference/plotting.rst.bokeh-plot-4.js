document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined") {
        window._bokeh_onload_callbacks = [];
      }
    
      function run_callbacks() {
        window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        delete window._bokeh_onload_callbacks
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        window._bokeh_onload_callbacks.push(callback);
        if (window._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        window._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            window._bokeh_is_loading--;
            if (window._bokeh_is_loading === 0) {
              console.log("Bokeh: all BokehJS libraries loaded");
              run_callbacks()
            }
          };
          s.onerror = function() {
            console.warn("failed to load library " + url);
          };
          console.log("Bokeh: injecting script tag for BokehJS library: ", url);
          document.getElementsByTagName("head")[0].appendChild(s);
        }
      };var element = document.getElementById("86316f56-36af-48ba-ab24-d992f1f3bec3");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '86316f56-36af-48ba-ab24-d992f1f3bec3' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.0.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"2c97ab81-2b6c-4e62-8424-b84230004823":{"roots":{"references":[{"attributes":{"plot":{"id":"4a5dc0cd-42a4-4445-9358-31134b139ac4","subtype":"Figure","type":"Plot"}},"id":"9915f1e1-dd01-4e02-9821-1a0a29948a28","type":"PanTool"},{"attributes":{"plot":{"id":"4a5dc0cd-42a4-4445-9358-31134b139ac4","subtype":"Figure","type":"Plot"}},"id":"4f9f3f35-e91d-4a3e-8f54-97e181d78bec","type":"WheelZoomTool"},{"attributes":{},"id":"0e79c6c8-fcd1-4c6c-bc80-d43221a90fef","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"9915f1e1-dd01-4e02-9821-1a0a29948a28","type":"PanTool"},{"id":"4f9f3f35-e91d-4a3e-8f54-97e181d78bec","type":"WheelZoomTool"},{"id":"af854cde-dcb5-47fb-8200-fd35a6865a72","type":"BoxZoomTool"},{"id":"de4a9126-0021-4ca0-9c1b-8e61e13709bf","type":"SaveTool"},{"id":"54d4a94a-7afa-4070-8106-59849dcf069e","type":"ResetTool"},{"id":"3dd5583c-0482-4e4c-9faf-99431725eef9","type":"HelpTool"}]},"id":"7e6dee94-6d1b-447a-99c6-0fd993853de6","type":"Toolbar"},{"attributes":{},"id":"667f8b8d-57db-4977-b50a-dad278668cfa","type":"BasicTicker"},{"attributes":{"data_source":{"id":"16b8bd3e-45d4-4e97-956d-999f12255fde","type":"ColumnDataSource"},"glyph":{"id":"8d46ec89-df3f-4d89-aafb-93f14d7d5169","type":"CircleX"},"hover_glyph":null,"nonselection_glyph":{"id":"b30277dc-adf2-4430-911f-46ceccb102d8","type":"CircleX"},"selection_glyph":null},"id":"3ea7903a-c3ac-457e-be13-0bdc0fdd278b","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"4a5dc0cd-42a4-4445-9358-31134b139ac4","subtype":"Figure","type":"Plot"}},"id":"3dd5583c-0482-4e4c-9faf-99431725eef9","type":"HelpTool"},{"attributes":{"overlay":{"id":"ed232b74-0830-4c44-998a-a2127e0433c9","type":"BoxAnnotation"},"plot":{"id":"4a5dc0cd-42a4-4445-9358-31134b139ac4","subtype":"Figure","type":"Plot"}},"id":"af854cde-dcb5-47fb-8200-fd35a6865a72","type":"BoxZoomTool"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"16b8bd3e-45d4-4e97-956d-999f12255fde","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"ed232b74-0830-4c44-998a-a2127e0433c9","type":"BoxAnnotation"},{"attributes":{"plot":null,"text":null},"id":"c1073616-d010-448c-9bfa-927ec0dcf275","type":"Title"},{"attributes":{"plot":{"id":"4a5dc0cd-42a4-4445-9358-31134b139ac4","subtype":"Figure","type":"Plot"}},"id":"de4a9126-0021-4ca0-9c1b-8e61e13709bf","type":"SaveTool"},{"attributes":{"callback":null},"id":"f70e103d-c58b-4c3d-b841-a004d1b94754","type":"DataRange1d"},{"attributes":{"below":[{"id":"6dabcfa1-39ee-45ef-98a6-398c21c08979","type":"LinearAxis"}],"left":[{"id":"3f13f540-61a7-44ae-a791-cb39caba35f6","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"6dabcfa1-39ee-45ef-98a6-398c21c08979","type":"LinearAxis"},{"id":"4623635f-2ef0-43a5-8d0e-ae3ebb72b78f","type":"Grid"},{"id":"3f13f540-61a7-44ae-a791-cb39caba35f6","type":"LinearAxis"},{"id":"a0e88c78-d16d-4202-9525-6393463be3b1","type":"Grid"},{"id":"ed232b74-0830-4c44-998a-a2127e0433c9","type":"BoxAnnotation"},{"id":"3ea7903a-c3ac-457e-be13-0bdc0fdd278b","type":"GlyphRenderer"}],"title":{"id":"c1073616-d010-448c-9bfa-927ec0dcf275","type":"Title"},"tool_events":{"id":"b5497c11-6190-4fe2-af85-f6e667b6133c","type":"ToolEvents"},"toolbar":{"id":"7e6dee94-6d1b-447a-99c6-0fd993853de6","type":"Toolbar"},"x_range":{"id":"d6572941-d7e2-4072-a7b7-11b2d4d76b70","type":"DataRange1d"},"y_range":{"id":"f70e103d-c58b-4c3d-b841-a004d1b94754","type":"DataRange1d"}},"id":"4a5dc0cd-42a4-4445-9358-31134b139ac4","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"054cadf5-8a56-4956-a455-a4048cf5edb3","type":"BasicTickFormatter"},"plot":{"id":"4a5dc0cd-42a4-4445-9358-31134b139ac4","subtype":"Figure","type":"Plot"},"ticker":{"id":"667f8b8d-57db-4977-b50a-dad278668cfa","type":"BasicTicker"}},"id":"3f13f540-61a7-44ae-a791-cb39caba35f6","type":"LinearAxis"},{"attributes":{},"id":"b5497c11-6190-4fe2-af85-f6e667b6133c","type":"ToolEvents"},{"attributes":{"callback":null},"id":"d6572941-d7e2-4072-a7b7-11b2d4d76b70","type":"DataRange1d"},{"attributes":{},"id":"14ec095e-0218-488a-a127-303235bedcde","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"b30277dc-adf2-4430-911f-46ceccb102d8","type":"CircleX"},{"attributes":{"dimension":1,"plot":{"id":"4a5dc0cd-42a4-4445-9358-31134b139ac4","subtype":"Figure","type":"Plot"},"ticker":{"id":"667f8b8d-57db-4977-b50a-dad278668cfa","type":"BasicTicker"}},"id":"a0e88c78-d16d-4202-9525-6393463be3b1","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#DD1C77"},"line_color":{"value":"#DD1C77"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"8d46ec89-df3f-4d89-aafb-93f14d7d5169","type":"CircleX"},{"attributes":{"plot":{"id":"4a5dc0cd-42a4-4445-9358-31134b139ac4","subtype":"Figure","type":"Plot"},"ticker":{"id":"14ec095e-0218-488a-a127-303235bedcde","type":"BasicTicker"}},"id":"4623635f-2ef0-43a5-8d0e-ae3ebb72b78f","type":"Grid"},{"attributes":{},"id":"054cadf5-8a56-4956-a455-a4048cf5edb3","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"4a5dc0cd-42a4-4445-9358-31134b139ac4","subtype":"Figure","type":"Plot"}},"id":"54d4a94a-7afa-4070-8106-59849dcf069e","type":"ResetTool"},{"attributes":{"formatter":{"id":"0e79c6c8-fcd1-4c6c-bc80-d43221a90fef","type":"BasicTickFormatter"},"plot":{"id":"4a5dc0cd-42a4-4445-9358-31134b139ac4","subtype":"Figure","type":"Plot"},"ticker":{"id":"14ec095e-0218-488a-a127-303235bedcde","type":"BasicTicker"}},"id":"6dabcfa1-39ee-45ef-98a6-398c21c08979","type":"LinearAxis"}],"root_ids":["4a5dc0cd-42a4-4445-9358-31134b139ac4"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"2c97ab81-2b6c-4e62-8424-b84230004823","elementid":"86316f56-36af-48ba-ab24-d992f1f3bec3","modelid":"4a5dc0cd-42a4-4445-9358-31134b139ac4"}];
              
              Bokeh.embed.embed_items(docs_json, render_items);
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.css");
        }
      ];
    
      function run_inline_js() {
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i](window.Bokeh);
        }
      }
    
      if (window._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(this));
});