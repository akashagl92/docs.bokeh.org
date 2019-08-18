(function() {
  var fn = function() {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force === true) {
        window._bokeh_onload_callbacks = [];
        window._bokeh_is_loading = undefined;
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
      };var element = document.getElementById("9ae03bc8-b611-4232-8f13-6016fd3cc586");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '9ae03bc8-b611-4232-8f13-6016fd3cc586' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                var docs_json = {"8433a31b-545c-4854-b34b-bd1c009eef30":{"roots":{"references":[{"attributes":{},"id":"40a2ef6d-4126-4bc7-93e9-fd721909c609","type":"ToolEvents"},{"attributes":{"dimension":1,"plot":{"id":"6a16d7fd-af7b-4b88-9a79-38ee18bd436c","subtype":"Figure","type":"Plot"},"ticker":{"id":"e7489f61-94fb-4622-86ca-8da12c7e4784","type":"BasicTicker"}},"id":"a63eb736-170c-4390-8b89-a588a1193ccb","type":"Grid"},{"attributes":{"plot":{"id":"6a16d7fd-af7b-4b88-9a79-38ee18bd436c","subtype":"Figure","type":"Plot"}},"id":"53685a3b-015c-4948-9a93-fe61a485cd01","type":"SaveTool"},{"attributes":{},"id":"6273a961-c54e-4718-90b9-0fb05cd24dd0","type":"BasicTickFormatter"},{"attributes":{"callback":{"id":"5065fb9a-3bc8-4ce6-9df3-5dffb6965d63","type":"CustomJS"},"end":4,"start":0.1,"title":"power","value":1},"id":"bbac6a41-8c5c-4e56-a811-3bd29c40098c","type":"Slider"},{"attributes":{"callback":null},"id":"fe13357d-2742-4c77-8569-98c9fbf90507","type":"DataRange1d"},{"attributes":{},"id":"e7489f61-94fb-4622-86ca-8da12c7e4784","type":"BasicTicker"},{"attributes":{},"id":"8b340e46-ffc2-483d-a757-ea391d372c4b","type":"BasicTickFormatter"},{"attributes":{"line_alpha":{"value":0.6},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"ecbf3743-3fd0-4171-89d6-d199628a16c5","type":"Line"},{"attributes":{"args":{"source":{"id":"1c777775-70ad-4116-a2f3-b611fc97fb62","type":"ColumnDataSource"}},"code":"\n        var data = source.data;\n        var f = cb_obj.value\n        x = data['x']\n        y = data['y']\n        for (i = 0; i < x.length; i++) {\n            y[i] = Math.pow(x[i], f)\n        }\n        source.trigger('change');\n    "},"id":"5065fb9a-3bc8-4ce6-9df3-5dffb6965d63","type":"CustomJS"},{"attributes":{"formatter":{"id":"8b340e46-ffc2-483d-a757-ea391d372c4b","type":"BasicTickFormatter"},"plot":{"id":"6a16d7fd-af7b-4b88-9a79-38ee18bd436c","subtype":"Figure","type":"Plot"},"ticker":{"id":"b1ee10bb-0633-47b4-a379-00cc5155013a","type":"BasicTicker"}},"id":"a7af631f-14d0-4e04-afe3-329ecf31973d","type":"LinearAxis"},{"attributes":{"plot":{"id":"6a16d7fd-af7b-4b88-9a79-38ee18bd436c","subtype":"Figure","type":"Plot"}},"id":"14c32fb3-a1fb-4fdd-9564-8c5f383e3973","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"07ed6c66-03a2-4afa-8473-ee5a32054269","type":"BoxAnnotation"},"plot":{"id":"6a16d7fd-af7b-4b88-9a79-38ee18bd436c","subtype":"Figure","type":"Plot"}},"id":"95ff3714-ed58-44d2-9d51-9c30e4ba36e2","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"6a16d7fd-af7b-4b88-9a79-38ee18bd436c","subtype":"Figure","type":"Plot"}},"id":"1b7b0d9f-f0f1-4f3d-90a3-870af1aea776","type":"PanTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"1b7b0d9f-f0f1-4f3d-90a3-870af1aea776","type":"PanTool"},{"id":"14c32fb3-a1fb-4fdd-9564-8c5f383e3973","type":"WheelZoomTool"},{"id":"95ff3714-ed58-44d2-9d51-9c30e4ba36e2","type":"BoxZoomTool"},{"id":"53685a3b-015c-4948-9a93-fe61a485cd01","type":"SaveTool"},{"id":"95d81d83-b90b-4ab3-ad8f-a35705b66d07","type":"ResetTool"},{"id":"ad9f85b6-6d39-478e-8d0b-9b35a665d16b","type":"HelpTool"}]},"id":"eb773af5-f35a-4f54-a12d-4495c19402f1","type":"Toolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"07ed6c66-03a2-4afa-8473-ee5a32054269","type":"BoxAnnotation"},{"attributes":{},"id":"b1ee10bb-0633-47b4-a379-00cc5155013a","type":"BasicTicker"},{"attributes":{"children":[{"id":"3100307f-d4c5-4c35-9195-9d6c9aec4ea0","type":"WidgetBox"},{"id":"6a16d7fd-af7b-4b88-9a79-38ee18bd436c","subtype":"Figure","type":"Plot"}]},"id":"b53469fb-7a2b-4046-89cc-ce0049b7ba26","type":"Column"},{"attributes":{"data_source":{"id":"1c777775-70ad-4116-a2f3-b611fc97fb62","type":"ColumnDataSource"},"glyph":{"id":"ecbf3743-3fd0-4171-89d6-d199628a16c5","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"fb7190c3-08cb-4683-8991-f5fdc0921505","type":"Line"},"selection_glyph":null},"id":"39750bdb-551e-42f1-a632-a62cab31d777","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"6273a961-c54e-4718-90b9-0fb05cd24dd0","type":"BasicTickFormatter"},"plot":{"id":"6a16d7fd-af7b-4b88-9a79-38ee18bd436c","subtype":"Figure","type":"Plot"},"ticker":{"id":"e7489f61-94fb-4622-86ca-8da12c7e4784","type":"BasicTicker"}},"id":"4b2579ea-adc8-4ca9-a1e4-3fc44ced4289","type":"LinearAxis"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"fb7190c3-08cb-4683-8991-f5fdc0921505","type":"Line"},{"attributes":{"callback":null},"id":"51cbd78f-daad-4297-98a4-5bd7bf08e1ee","type":"DataRange1d"},{"attributes":{"plot":{"id":"6a16d7fd-af7b-4b88-9a79-38ee18bd436c","subtype":"Figure","type":"Plot"}},"id":"ad9f85b6-6d39-478e-8d0b-9b35a665d16b","type":"HelpTool"},{"attributes":{"children":[{"id":"bbac6a41-8c5c-4e56-a811-3bd29c40098c","type":"Slider"}]},"id":"3100307f-d4c5-4c35-9195-9d6c9aec4ea0","type":"WidgetBox"},{"attributes":{"below":[{"id":"a7af631f-14d0-4e04-afe3-329ecf31973d","type":"LinearAxis"}],"left":[{"id":"4b2579ea-adc8-4ca9-a1e4-3fc44ced4289","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"a7af631f-14d0-4e04-afe3-329ecf31973d","type":"LinearAxis"},{"id":"91cfb968-0a33-4d42-9b91-0031aca86bec","type":"Grid"},{"id":"4b2579ea-adc8-4ca9-a1e4-3fc44ced4289","type":"LinearAxis"},{"id":"a63eb736-170c-4390-8b89-a588a1193ccb","type":"Grid"},{"id":"07ed6c66-03a2-4afa-8473-ee5a32054269","type":"BoxAnnotation"},{"id":"39750bdb-551e-42f1-a632-a62cab31d777","type":"GlyphRenderer"}],"title":{"id":"e5e61ca7-bf63-431b-8432-801dd63ab444","type":"Title"},"tool_events":{"id":"40a2ef6d-4126-4bc7-93e9-fd721909c609","type":"ToolEvents"},"toolbar":{"id":"eb773af5-f35a-4f54-a12d-4495c19402f1","type":"Toolbar"},"x_range":{"id":"fe13357d-2742-4c77-8569-98c9fbf90507","type":"DataRange1d"},"y_range":{"id":"51cbd78f-daad-4297-98a4-5bd7bf08e1ee","type":"DataRange1d"}},"id":"6a16d7fd-af7b-4b88-9a79-38ee18bd436c","subtype":"Figure","type":"Plot"},{"attributes":{"plot":null,"text":""},"id":"e5e61ca7-bf63-431b-8432-801dd63ab444","type":"Title"},{"attributes":{"plot":{"id":"6a16d7fd-af7b-4b88-9a79-38ee18bd436c","subtype":"Figure","type":"Plot"}},"id":"95d81d83-b90b-4ab3-ad8f-a35705b66d07","type":"ResetTool"},{"attributes":{"plot":{"id":"6a16d7fd-af7b-4b88-9a79-38ee18bd436c","subtype":"Figure","type":"Plot"},"ticker":{"id":"b1ee10bb-0633-47b4-a379-00cc5155013a","type":"BasicTicker"}},"id":"91cfb968-0a33-4d42-9b91-0031aca86bec","type":"Grid"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0.0,0.005,0.01,0.015,0.02,0.025,0.03,0.035,0.04,0.045,0.05,0.055,0.06,0.065,0.07,0.075,0.08,0.085,0.09,0.095,0.1,0.105,0.11,0.115,0.12,0.125,0.13,0.135,0.14,0.145,0.15,0.155,0.16,0.165,0.17,0.17500000000000002,0.18,0.185,0.19,0.195,0.2,0.20500000000000002,0.21,0.215,0.22,0.225,0.23,0.23500000000000001,0.24,0.245,0.25,0.255,0.26,0.265,0.27,0.275,0.28,0.28500000000000003,0.29,0.295,0.3,0.305,0.31,0.315,0.32,0.325,0.33,0.335,0.34,0.34500000000000003,0.35000000000000003,0.355,0.36,0.365,0.37,0.375,0.38,0.385,0.39,0.395,0.4,0.405,0.41000000000000003,0.41500000000000004,0.42,0.425,0.43,0.435,0.44,0.445,0.45,0.455,0.46,0.465,0.47000000000000003,0.47500000000000003,0.48,0.485,0.49,0.495,0.5,0.505,0.51,0.515,0.52,0.525,0.53,0.535,0.54,0.545,0.55,0.555,0.56,0.5650000000000001,0.5700000000000001,0.5750000000000001,0.58,0.585,0.59,0.595,0.6,0.605,0.61,0.615,0.62,0.625,0.63,0.635,0.64,0.645,0.65,0.655,0.66,0.665,0.67,0.675,0.68,0.685,0.6900000000000001,0.6950000000000001,0.7000000000000001,0.705,0.71,0.715,0.72,0.725,0.73,0.735,0.74,0.745,0.75,0.755,0.76,0.765,0.77,0.775,0.78,0.785,0.79,0.795,0.8,0.805,0.81,0.8150000000000001,0.8200000000000001,0.8250000000000001,0.8300000000000001,0.835,0.84,0.845,0.85,0.855,0.86,0.865,0.87,0.875,0.88,0.885,0.89,0.895,0.9,0.905,0.91,0.915,0.92,0.925,0.93,0.935,0.9400000000000001,0.9450000000000001,0.9500000000000001,0.9550000000000001,0.96,0.965,0.97,0.975,0.98,0.985,0.99,0.995],"y":[0.0,0.005,0.01,0.015,0.02,0.025,0.03,0.035,0.04,0.045,0.05,0.055,0.06,0.065,0.07,0.075,0.08,0.085,0.09,0.095,0.1,0.105,0.11,0.115,0.12,0.125,0.13,0.135,0.14,0.145,0.15,0.155,0.16,0.165,0.17,0.17500000000000002,0.18,0.185,0.19,0.195,0.2,0.20500000000000002,0.21,0.215,0.22,0.225,0.23,0.23500000000000001,0.24,0.245,0.25,0.255,0.26,0.265,0.27,0.275,0.28,0.28500000000000003,0.29,0.295,0.3,0.305,0.31,0.315,0.32,0.325,0.33,0.335,0.34,0.34500000000000003,0.35000000000000003,0.355,0.36,0.365,0.37,0.375,0.38,0.385,0.39,0.395,0.4,0.405,0.41000000000000003,0.41500000000000004,0.42,0.425,0.43,0.435,0.44,0.445,0.45,0.455,0.46,0.465,0.47000000000000003,0.47500000000000003,0.48,0.485,0.49,0.495,0.5,0.505,0.51,0.515,0.52,0.525,0.53,0.535,0.54,0.545,0.55,0.555,0.56,0.5650000000000001,0.5700000000000001,0.5750000000000001,0.58,0.585,0.59,0.595,0.6,0.605,0.61,0.615,0.62,0.625,0.63,0.635,0.64,0.645,0.65,0.655,0.66,0.665,0.67,0.675,0.68,0.685,0.6900000000000001,0.6950000000000001,0.7000000000000001,0.705,0.71,0.715,0.72,0.725,0.73,0.735,0.74,0.745,0.75,0.755,0.76,0.765,0.77,0.775,0.78,0.785,0.79,0.795,0.8,0.805,0.81,0.8150000000000001,0.8200000000000001,0.8250000000000001,0.8300000000000001,0.835,0.84,0.845,0.85,0.855,0.86,0.865,0.87,0.875,0.88,0.885,0.89,0.895,0.9,0.905,0.91,0.915,0.92,0.925,0.93,0.935,0.9400000000000001,0.9450000000000001,0.9500000000000001,0.9550000000000001,0.96,0.965,0.97,0.975,0.98,0.985,0.99,0.995]}},"id":"1c777775-70ad-4116-a2f3-b611fc97fb62","type":"ColumnDataSource"}],"root_ids":["b53469fb-7a2b-4046-89cc-ce0049b7ba26"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"8433a31b-545c-4854-b34b-bd1c009eef30","elementid":"9ae03bc8-b611-4232-8f13-6016fd3cc586","modelid":"b53469fb-7a2b-4046-89cc-ce0049b7ba26"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
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
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
