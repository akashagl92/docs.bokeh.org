(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (root._bokeh_onload_callbacks) === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete root._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            root._bokeh_is_loading--;
            if (root._bokeh_is_loading === 0) {
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
      };var element = document.getElementById("6022bcfe-968e-4b6f-af0e-141298826817");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '6022bcfe-968e-4b6f-af0e-141298826817' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.7.min.js"];
    
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
                var docs_json = {"f70ccb40-b8ff-493a-ba03-1471b4c4d064":{"roots":{"references":[{"attributes":{},"id":"548e7c63-c7f7-4c05-bce6-f90a772aa8d4","type":"BasicTickFormatter"},{"attributes":{"line_alpha":{"value":0.6},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"9cbda202-b617-42af-ad51-48072e3af0dd","type":"Line"},{"attributes":{"overlay":{"id":"981f6fc2-e836-421a-86bc-1ad6b0114248","type":"BoxAnnotation"}},"id":"c1346c3f-1a42-47da-b0dd-145e2b185ac0","type":"BoxZoomTool"},{"attributes":{"plot":null,"text":""},"id":"2b1314e9-3745-4cda-bdc7-ac9d7dcbe85a","type":"Title"},{"attributes":{},"id":"7cd09c9f-3882-4490-b78a-1c9b87308cba","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"c020be05-0ba0-42a8-a82f-ebef66f70bfb","subtype":"Figure","type":"Plot"},"ticker":{"id":"68468b5d-3e97-4e9e-b63c-b83a362eed98","type":"BasicTicker"}},"id":"f6929fae-23f0-46eb-b106-4f3ae4ff37f7","type":"Grid"},{"attributes":{},"id":"f8a8252f-f1b3-41ab-b427-90187384b194","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"c1c0ff13-2e5a-4afc-bc42-4760cfa3dbc9","type":"DataRange1d"},{"attributes":{},"id":"3f313c0a-a6bd-4cf9-8e70-218978a1dcf4","type":"LinearScale"},{"attributes":{"callback":null},"id":"0f7b187a-f35d-46ad-99ba-375a93801d63","type":"DataRange1d"},{"attributes":{"formatter":{"id":"7cd09c9f-3882-4490-b78a-1c9b87308cba","type":"BasicTickFormatter"},"plot":{"id":"c020be05-0ba0-42a8-a82f-ebef66f70bfb","subtype":"Figure","type":"Plot"},"ticker":{"id":"68468b5d-3e97-4e9e-b63c-b83a362eed98","type":"BasicTicker"}},"id":"6dd97130-026b-480b-b530-979443d3ac93","type":"LinearAxis"},{"attributes":{},"id":"6213bdd0-446d-4b91-9df7-fe42b24be633","type":"ResetTool"},{"attributes":{"children":[{"id":"e9920cf1-14fd-4bff-9cc7-26c0bb8c60cc","type":"Slider"}]},"id":"d19ac8a8-05ff-45ae-931a-a22b1def4aa5","type":"WidgetBox"},{"attributes":{},"id":"186bfeb3-6616-40e3-b2e7-ad327cc28074","type":"SaveTool"},{"attributes":{},"id":"68468b5d-3e97-4e9e-b63c-b83a362eed98","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"93a3c80c-5cd7-4ae7-9b0d-5d339a6bf070","type":"PanTool"},{"id":"f8a8252f-f1b3-41ab-b427-90187384b194","type":"WheelZoomTool"},{"id":"c1346c3f-1a42-47da-b0dd-145e2b185ac0","type":"BoxZoomTool"},{"id":"186bfeb3-6616-40e3-b2e7-ad327cc28074","type":"SaveTool"},{"id":"6213bdd0-446d-4b91-9df7-fe42b24be633","type":"ResetTool"},{"id":"a112effd-f9fb-4b95-a8e2-3f9cb7db0f36","type":"HelpTool"}]},"id":"71012a7b-9965-4836-9b83-b8f5ac89b0be","type":"Toolbar"},{"attributes":{"plot":{"id":"c020be05-0ba0-42a8-a82f-ebef66f70bfb","subtype":"Figure","type":"Plot"},"ticker":{"id":"82ebebbb-3d81-40e6-ac17-761b66cecd16","type":"BasicTicker"}},"id":"ff5474e8-e6cb-432d-a16a-4d3fa5d5c935","type":"Grid"},{"attributes":{},"id":"a112effd-f9fb-4b95-a8e2-3f9cb7db0f36","type":"HelpTool"},{"attributes":{},"id":"93a3c80c-5cd7-4ae7-9b0d-5d339a6bf070","type":"PanTool"},{"attributes":{"data_source":{"id":"64dd4c86-283b-44bb-93a7-02bfb70b4c2e","type":"ColumnDataSource"},"glyph":{"id":"9cbda202-b617-42af-ad51-48072e3af0dd","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"0d90179b-e04f-4fc3-9b96-63fcd4326732","type":"Line"},"selection_glyph":null,"view":{"id":"66c41996-17f4-4178-94aa-aaf761b4ca6f","type":"CDSView"}},"id":"175097ed-a277-4b99-a96a-8638d2ed934c","type":"GlyphRenderer"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"0d90179b-e04f-4fc3-9b96-63fcd4326732","type":"Line"},{"attributes":{},"id":"82ebebbb-3d81-40e6-ac17-761b66cecd16","type":"BasicTicker"},{"attributes":{},"id":"a1cfdf53-fa40-4e4a-8f66-abd39b96ba24","type":"LinearScale"},{"attributes":{"source":{"id":"64dd4c86-283b-44bb-93a7-02bfb70b4c2e","type":"ColumnDataSource"}},"id":"66c41996-17f4-4178-94aa-aaf761b4ca6f","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"981f6fc2-e836-421a-86bc-1ad6b0114248","type":"BoxAnnotation"},{"attributes":{"children":[{"id":"d19ac8a8-05ff-45ae-931a-a22b1def4aa5","type":"WidgetBox"},{"id":"c020be05-0ba0-42a8-a82f-ebef66f70bfb","subtype":"Figure","type":"Plot"}]},"id":"3ca32252-0150-4dde-804b-046159ead5d7","type":"Column"},{"attributes":{"formatter":{"id":"548e7c63-c7f7-4c05-bce6-f90a772aa8d4","type":"BasicTickFormatter"},"plot":{"id":"c020be05-0ba0-42a8-a82f-ebef66f70bfb","subtype":"Figure","type":"Plot"},"ticker":{"id":"82ebebbb-3d81-40e6-ac17-761b66cecd16","type":"BasicTicker"}},"id":"85689abc-8af4-4fdf-afcb-56bc7b253494","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0.0,0.005,0.01,0.015,0.02,0.025,0.03,0.035,0.04,0.045,0.05,0.055,0.06,0.065,0.07,0.075,0.08,0.085,0.09,0.095,0.1,0.105,0.11,0.115,0.12,0.125,0.13,0.135,0.14,0.145,0.15,0.155,0.16,0.165,0.17,0.17500000000000002,0.18,0.185,0.19,0.195,0.2,0.20500000000000002,0.21,0.215,0.22,0.225,0.23,0.23500000000000001,0.24,0.245,0.25,0.255,0.26,0.265,0.27,0.275,0.28,0.28500000000000003,0.29,0.295,0.3,0.305,0.31,0.315,0.32,0.325,0.33,0.335,0.34,0.34500000000000003,0.35000000000000003,0.355,0.36,0.365,0.37,0.375,0.38,0.385,0.39,0.395,0.4,0.405,0.41000000000000003,0.41500000000000004,0.42,0.425,0.43,0.435,0.44,0.445,0.45,0.455,0.46,0.465,0.47000000000000003,0.47500000000000003,0.48,0.485,0.49,0.495,0.5,0.505,0.51,0.515,0.52,0.525,0.53,0.535,0.54,0.545,0.55,0.555,0.56,0.5650000000000001,0.5700000000000001,0.5750000000000001,0.58,0.585,0.59,0.595,0.6,0.605,0.61,0.615,0.62,0.625,0.63,0.635,0.64,0.645,0.65,0.655,0.66,0.665,0.67,0.675,0.68,0.685,0.6900000000000001,0.6950000000000001,0.7000000000000001,0.705,0.71,0.715,0.72,0.725,0.73,0.735,0.74,0.745,0.75,0.755,0.76,0.765,0.77,0.775,0.78,0.785,0.79,0.795,0.8,0.805,0.81,0.8150000000000001,0.8200000000000001,0.8250000000000001,0.8300000000000001,0.835,0.84,0.845,0.85,0.855,0.86,0.865,0.87,0.875,0.88,0.885,0.89,0.895,0.9,0.905,0.91,0.915,0.92,0.925,0.93,0.935,0.9400000000000001,0.9450000000000001,0.9500000000000001,0.9550000000000001,0.96,0.965,0.97,0.975,0.98,0.985,0.99,0.995],"y":[0.0,0.005,0.01,0.015,0.02,0.025,0.03,0.035,0.04,0.045,0.05,0.055,0.06,0.065,0.07,0.075,0.08,0.085,0.09,0.095,0.1,0.105,0.11,0.115,0.12,0.125,0.13,0.135,0.14,0.145,0.15,0.155,0.16,0.165,0.17,0.17500000000000002,0.18,0.185,0.19,0.195,0.2,0.20500000000000002,0.21,0.215,0.22,0.225,0.23,0.23500000000000001,0.24,0.245,0.25,0.255,0.26,0.265,0.27,0.275,0.28,0.28500000000000003,0.29,0.295,0.3,0.305,0.31,0.315,0.32,0.325,0.33,0.335,0.34,0.34500000000000003,0.35000000000000003,0.355,0.36,0.365,0.37,0.375,0.38,0.385,0.39,0.395,0.4,0.405,0.41000000000000003,0.41500000000000004,0.42,0.425,0.43,0.435,0.44,0.445,0.45,0.455,0.46,0.465,0.47000000000000003,0.47500000000000003,0.48,0.485,0.49,0.495,0.5,0.505,0.51,0.515,0.52,0.525,0.53,0.535,0.54,0.545,0.55,0.555,0.56,0.5650000000000001,0.5700000000000001,0.5750000000000001,0.58,0.585,0.59,0.595,0.6,0.605,0.61,0.615,0.62,0.625,0.63,0.635,0.64,0.645,0.65,0.655,0.66,0.665,0.67,0.675,0.68,0.685,0.6900000000000001,0.6950000000000001,0.7000000000000001,0.705,0.71,0.715,0.72,0.725,0.73,0.735,0.74,0.745,0.75,0.755,0.76,0.765,0.77,0.775,0.78,0.785,0.79,0.795,0.8,0.805,0.81,0.8150000000000001,0.8200000000000001,0.8250000000000001,0.8300000000000001,0.835,0.84,0.845,0.85,0.855,0.86,0.865,0.87,0.875,0.88,0.885,0.89,0.895,0.9,0.905,0.91,0.915,0.92,0.925,0.93,0.935,0.9400000000000001,0.9450000000000001,0.9500000000000001,0.9550000000000001,0.96,0.965,0.97,0.975,0.98,0.985,0.99,0.995]}},"id":"64dd4c86-283b-44bb-93a7-02bfb70b4c2e","type":"ColumnDataSource"},{"attributes":{"args":{"source":{"id":"64dd4c86-283b-44bb-93a7-02bfb70b4c2e","type":"ColumnDataSource"}},"code":"\n        var data = source.data;\n        var f = cb_obj.value\n        x = data['x']\n        y = data['y']\n        for (i = 0; i < x.length; i++) {\n            y[i] = Math.pow(x[i], f)\n        }\n        source.change.emit();\n    "},"id":"d5a78aac-7e3a-4b98-a306-a768872210a5","type":"CustomJS"},{"attributes":{"callback":{"id":"d5a78aac-7e3a-4b98-a306-a768872210a5","type":"CustomJS"},"end":4,"start":0.1,"step":0.1,"title":"power","value":1},"id":"e9920cf1-14fd-4bff-9cc7-26c0bb8c60cc","type":"Slider"},{"attributes":{"below":[{"id":"85689abc-8af4-4fdf-afcb-56bc7b253494","type":"LinearAxis"}],"left":[{"id":"6dd97130-026b-480b-b530-979443d3ac93","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"85689abc-8af4-4fdf-afcb-56bc7b253494","type":"LinearAxis"},{"id":"ff5474e8-e6cb-432d-a16a-4d3fa5d5c935","type":"Grid"},{"id":"6dd97130-026b-480b-b530-979443d3ac93","type":"LinearAxis"},{"id":"f6929fae-23f0-46eb-b106-4f3ae4ff37f7","type":"Grid"},{"id":"981f6fc2-e836-421a-86bc-1ad6b0114248","type":"BoxAnnotation"},{"id":"175097ed-a277-4b99-a96a-8638d2ed934c","type":"GlyphRenderer"}],"title":{"id":"2b1314e9-3745-4cda-bdc7-ac9d7dcbe85a","type":"Title"},"toolbar":{"id":"71012a7b-9965-4836-9b83-b8f5ac89b0be","type":"Toolbar"},"x_range":{"id":"0f7b187a-f35d-46ad-99ba-375a93801d63","type":"DataRange1d"},"x_scale":{"id":"3f313c0a-a6bd-4cf9-8e70-218978a1dcf4","type":"LinearScale"},"y_range":{"id":"c1c0ff13-2e5a-4afc-bc42-4760cfa3dbc9","type":"DataRange1d"},"y_scale":{"id":"a1cfdf53-fa40-4e4a-8f66-abd39b96ba24","type":"LinearScale"}},"id":"c020be05-0ba0-42a8-a82f-ebef66f70bfb","subtype":"Figure","type":"Plot"}],"root_ids":["3ca32252-0150-4dde-804b-046159ead5d7"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"f70ccb40-b8ff-493a-ba03-1471b4c4d064","elementid":"6022bcfe-968e-4b6f-af0e-141298826817","modelid":"3ca32252-0150-4dde-804b-046159ead5d7"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
