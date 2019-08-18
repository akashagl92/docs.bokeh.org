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
      };var element = document.getElementById("379641cd-481c-4bf3-a58c-1e1ed013b8a5");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '379641cd-481c-4bf3-a58c-1e1ed013b8a5' but no matching script tag was found. ")
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
                var docs_json = {"e867c241-00b6-4007-8021-bcf9a649e53f":{"roots":{"references":[{"attributes":{},"id":"1cbdcd6a-2540-4028-b786-da3a1e637386","type":"CategoricalTickFormatter"},{"attributes":{"callback":null,"column_names":["width","line_color","color","height","x","y","label","line_alpha","fill_alpha"],"data":{"chart_index":[{"interpreter":"python","sample":"1st"}],"color":["#f22c40"],"fill_alpha":[0.8],"height":[-2.0],"interpreter":["python"],"label":[{"interpreter":"python","sample":"1st"}],"line_alpha":[1.0],"line_color":["#f22c40"],"sample":["1st"],"width":[0.2],"x":["python:0.333333333333"],"y":[-1.0]}},"id":"30108889-b6e0-4c7f-92e9-fbbf6e24017c","type":"ColumnDataSource"},{"attributes":{"callback":null,"end":41.9,"start":-3.9000000000000004},"id":"8dd3005c-ed1e-4951-8f46-fa3560101271","type":"Range1d"},{"attributes":{"plot":{"id":"2cdff61f-df50-42d9-b629-a5bc640939b1","subtype":"Chart","type":"Plot"}},"id":"c9e66da4-1798-4d6a-8c00-9778ab542feb","type":"WheelZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"2cdff61f-df50-42d9-b629-a5bc640939b1","subtype":"Chart","type":"Plot"},"ticker":{"id":"a64ee095-e4b9-44c6-a1d2-a4f56d41e15a","type":"BasicTicker"}},"id":"0ef55f72-9c40-44ec-b89a-6b696ea28375","type":"Grid"},{"attributes":{"items":[{"id":"efbd57ab-7c97-4248-a951-d4e164d12892","type":"LegendItem"},{"id":"315666d5-7f18-434a-a27b-051254ad5c5f","type":"LegendItem"}],"plot":{"id":"2cdff61f-df50-42d9-b629-a5bc640939b1","subtype":"Chart","type":"Plot"}},"id":"0aadf156-31c6-4f20-aeed-877d4c3ba0d3","type":"Legend"},{"attributes":{},"id":"c359c48d-96bc-4f8f-af05-96fab6257272","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"71275176-b6f3-4049-a024-e029f2b587a8","type":"ColumnDataSource"},"glyph":{"id":"1cfac9c1-2737-4ff1-9847-dbd8877c5a6a","type":"Circle"},"hover_glyph":null,"muted_glyph":null},"id":"67671385-46af-4a4b-b7dd-cc570634470a","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["width","line_color","color","height","x","y","label","line_alpha","fill_alpha"],"data":{"chart_index":[{"interpreter":"jython","sample":"2nd"}],"color":["#5ab738"],"fill_alpha":[0.8],"height":[30.0],"interpreter":["jython"],"label":[{"interpreter":"jython","sample":"2nd"}],"line_alpha":[1.0],"line_color":["#f22c40"],"sample":["2nd"],"width":[0.2],"x":["jython:0.666666666667"],"y":[15.0]}},"id":"5ad52e51-cce5-4726-8a6d-c960e9c102e9","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["width","line_color","color","height","x","y","label","line_alpha","fill_alpha"],"data":{"chart_index":[{"interpreter":"python","sample":"2nd"}],"color":["#5ab738"],"fill_alpha":[0.8],"height":[5.0],"interpreter":["python"],"label":[{"interpreter":"python","sample":"2nd"}],"line_alpha":[1.0],"line_color":["#f22c40"],"sample":["2nd"],"width":[0.2],"x":["python:0.666666666667"],"y":[2.5]}},"id":"71275176-b6f3-4049-a024-e029f2b587a8","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"value":"#5ab738"},"line_alpha":{"field":"line_alpha"},"line_color":{"value":"#f22c40"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"height"}},"id":"ec2d422c-99d9-4662-9f34-76051434f0f4","type":"Circle"},{"attributes":{"plot":{"id":"2cdff61f-df50-42d9-b629-a5bc640939b1","subtype":"Chart","type":"Plot"}},"id":"3a6beeac-bd15-42a0-ab62-aa93eb5e3793","type":"SaveTool"},{"attributes":{"axis_label":"Interpreter","formatter":{"id":"1cbdcd6a-2540-4028-b786-da3a1e637386","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"2cdff61f-df50-42d9-b629-a5bc640939b1","subtype":"Chart","type":"Plot"},"ticker":{"id":"633c444f-0ef0-4add-9887-156e2bb10661","type":"CategoricalTicker"}},"id":"d294fd01-ca88-4e75-a784-502fef3eccaa","type":"CategoricalAxis"},{"attributes":{"plot":{"id":"2cdff61f-df50-42d9-b629-a5bc640939b1","subtype":"Chart","type":"Plot"}},"id":"b8865290-3a6e-43a5-91f2-6a7298f43316","type":"PanTool"},{"attributes":{"callback":null,"column_names":["width","line_color","color","height","x","y","label","line_alpha","fill_alpha"],"data":{"chart_index":[{"interpreter":"jython","sample":"1st"}],"color":["#f22c40"],"fill_alpha":[0.8],"height":[22.0],"interpreter":["jython"],"label":[{"interpreter":"jython","sample":"1st"}],"line_alpha":[1.0],"line_color":["#f22c40"],"sample":["1st"],"width":[0.2],"x":["jython:0.333333333333"],"y":[11.0]}},"id":"c6e7b575-7603-4798-8532-4203ac21cc88","type":"ColumnDataSource"},{"attributes":{"axis_label":"Mean( Timing )","formatter":{"id":"c359c48d-96bc-4f8f-af05-96fab6257272","type":"BasicTickFormatter"},"plot":{"id":"2cdff61f-df50-42d9-b629-a5bc640939b1","subtype":"Chart","type":"Plot"},"ticker":{"id":"a64ee095-e4b9-44c6-a1d2-a4f56d41e15a","type":"BasicTicker"}},"id":"19eabb6d-b1e6-4fd2-af07-700e47ad6842","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"464935c8-5483-4b4f-9425-cccb5aadf1bd","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"464935c8-5483-4b4f-9425-cccb5aadf1bd","type":"BoxAnnotation"},"plot":{"id":"2cdff61f-df50-42d9-b629-a5bc640939b1","subtype":"Chart","type":"Plot"}},"id":"6ae778af-7f97-4a48-9a60-0f30ae6fc718","type":"BoxZoomTool"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"value":"#f22c40"},"line_alpha":{"field":"line_alpha"},"line_color":{"value":"#f22c40"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"height"}},"id":"4665db01-a8e3-4bf0-a57d-59e84e5f19f2","type":"Circle"},{"attributes":{"below":[{"id":"d294fd01-ca88-4e75-a784-502fef3eccaa","type":"CategoricalAxis"}],"css_classes":null,"height":400,"left":[{"id":"19eabb6d-b1e6-4fd2-af07-700e47ad6842","type":"LinearAxis"}],"renderers":[{"id":"464935c8-5483-4b4f-9425-cccb5aadf1bd","type":"BoxAnnotation"},{"id":"ee3d16cc-d6c7-4a6f-bf12-e666d296dde9","type":"GlyphRenderer"},{"id":"67671385-46af-4a4b-b7dd-cc570634470a","type":"GlyphRenderer"},{"id":"faa7559f-a5a8-46d4-8e0f-22af1f68c460","type":"GlyphRenderer"},{"id":"560eaf1b-3207-40c9-b152-3c8e47f4b188","type":"GlyphRenderer"},{"id":"c8454e4c-06df-42c0-83b8-b53437a85725","type":"GlyphRenderer"},{"id":"51169193-1ef1-4a84-9b32-e3d91057a75a","type":"GlyphRenderer"},{"id":"0aadf156-31c6-4f20-aeed-877d4c3ba0d3","type":"Legend"},{"id":"d294fd01-ca88-4e75-a784-502fef3eccaa","type":"CategoricalAxis"},{"id":"19eabb6d-b1e6-4fd2-af07-700e47ad6842","type":"LinearAxis"},{"id":"0ef55f72-9c40-44ec-b89a-6b696ea28375","type":"Grid"}],"title":{"id":"77cf7ca0-17d0-4e11-b1d9-4ac8406415f3","type":"Title"},"tool_events":{"id":"b52507ea-6880-4752-8909-90f29ead65b8","type":"ToolEvents"},"toolbar":{"id":"4f7f9a70-ece9-4a4c-a2fb-66bde52a390a","type":"Toolbar"},"width":600,"x_mapper_type":"auto","x_range":{"id":"bbd5cab8-db3b-4866-a2eb-13630d05dcb2","type":"FactorRange"},"y_mapper_type":"auto","y_range":{"id":"8dd3005c-ed1e-4951-8f46-fa3560101271","type":"Range1d"}},"id":"2cdff61f-df50-42d9-b629-a5bc640939b1","subtype":"Chart","type":"Plot"},{"attributes":{"callback":null,"column_names":["width","line_color","color","height","x","y","label","line_alpha","fill_alpha"],"data":{"chart_index":[{"interpreter":"pypy","sample":"2nd"}],"color":["#5ab738"],"fill_alpha":[0.8],"height":[40.0],"interpreter":["pypy"],"label":[{"interpreter":"pypy","sample":"2nd"}],"line_alpha":[1.0],"line_color":["#f22c40"],"sample":["2nd"],"width":[0.2],"x":["pypy:0.666666666667"],"y":[20.0]}},"id":"3d24d759-3901-4aff-8a1f-f23d8630745a","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"c6e7b575-7603-4798-8532-4203ac21cc88","type":"ColumnDataSource"},"glyph":{"id":"84225389-ec1d-483e-9760-51801a9f4eaf","type":"Circle"},"hover_glyph":null,"muted_glyph":null},"id":"c8454e4c-06df-42c0-83b8-b53437a85725","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"value":"#5ab738"},"line_alpha":{"field":"line_alpha"},"line_color":{"value":"#f22c40"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"height"}},"id":"955cb880-97bd-4fb7-b91d-44b29f4375d9","type":"Circle"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"value":"#f22c40"},"line_alpha":{"field":"line_alpha"},"line_color":{"value":"#f22c40"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"height"}},"id":"84225389-ec1d-483e-9760-51801a9f4eaf","type":"Circle"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"value":"#f22c40"},"line_alpha":{"field":"line_alpha"},"line_color":{"value":"#f22c40"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"height"}},"id":"4eae4aab-ac1e-4dfb-890d-d5b3690911e3","type":"Circle"},{"attributes":{"label":{"value":"1st"},"renderers":[{"id":"ee3d16cc-d6c7-4a6f-bf12-e666d296dde9","type":"GlyphRenderer"}]},"id":"efbd57ab-7c97-4248-a951-d4e164d12892","type":"LegendItem"},{"attributes":{"callback":null,"factors":["jython","pypy","python"]},"id":"bbd5cab8-db3b-4866-a2eb-13630d05dcb2","type":"FactorRange"},{"attributes":{},"id":"633c444f-0ef0-4add-9887-156e2bb10661","type":"CategoricalTicker"},{"attributes":{"data_source":{"id":"5ad52e51-cce5-4726-8a6d-c960e9c102e9","type":"ColumnDataSource"},"glyph":{"id":"ec2d422c-99d9-4662-9f34-76051434f0f4","type":"Circle"},"hover_glyph":null,"muted_glyph":null},"id":"51169193-1ef1-4a84-9b32-e3d91057a75a","type":"GlyphRenderer"},{"attributes":{"label":{"value":"2nd"},"renderers":[{"id":"67671385-46af-4a4b-b7dd-cc570634470a","type":"GlyphRenderer"}]},"id":"315666d5-7f18-434a-a27b-051254ad5c5f","type":"LegendItem"},{"attributes":{"plot":{"id":"2cdff61f-df50-42d9-b629-a5bc640939b1","subtype":"Chart","type":"Plot"}},"id":"641ebb9c-5c63-4ead-bb3e-a3033bb9c61f","type":"ResetTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"b8865290-3a6e-43a5-91f2-6a7298f43316","type":"PanTool"},{"id":"c9e66da4-1798-4d6a-8c00-9778ab542feb","type":"WheelZoomTool"},{"id":"6ae778af-7f97-4a48-9a60-0f30ae6fc718","type":"BoxZoomTool"},{"id":"3a6beeac-bd15-42a0-ab62-aa93eb5e3793","type":"SaveTool"},{"id":"641ebb9c-5c63-4ead-bb3e-a3033bb9c61f","type":"ResetTool"},{"id":"4389fbb5-f562-488c-94ed-dc92d3dd346a","type":"HelpTool"}]},"id":"4f7f9a70-ece9-4a4c-a2fb-66bde52a390a","type":"Toolbar"},{"attributes":{"plot":null,"text":"Python Interpreter Sampling"},"id":"77cf7ca0-17d0-4e11-b1d9-4ac8406415f3","type":"Title"},{"attributes":{"callback":null,"column_names":["width","line_color","color","height","x","y","label","line_alpha","fill_alpha"],"data":{"chart_index":[{"interpreter":"pypy","sample":"1st"}],"color":["#f22c40"],"fill_alpha":[0.8],"height":[12.0],"interpreter":["pypy"],"label":[{"interpreter":"pypy","sample":"1st"}],"line_alpha":[1.0],"line_color":["#f22c40"],"sample":["1st"],"width":[0.2],"x":["pypy:0.333333333333"],"y":[6.0]}},"id":"2a6f1eb0-ca2f-4a4c-9db0-29bdf672a004","type":"ColumnDataSource"},{"attributes":{},"id":"a64ee095-e4b9-44c6-a1d2-a4f56d41e15a","type":"BasicTicker"},{"attributes":{"plot":{"id":"2cdff61f-df50-42d9-b629-a5bc640939b1","subtype":"Chart","type":"Plot"}},"id":"4389fbb5-f562-488c-94ed-dc92d3dd346a","type":"HelpTool"},{"attributes":{"data_source":{"id":"30108889-b6e0-4c7f-92e9-fbbf6e24017c","type":"ColumnDataSource"},"glyph":{"id":"4665db01-a8e3-4bf0-a57d-59e84e5f19f2","type":"Circle"},"hover_glyph":null,"muted_glyph":null},"id":"ee3d16cc-d6c7-4a6f-bf12-e666d296dde9","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"value":"#5ab738"},"line_alpha":{"field":"line_alpha"},"line_color":{"value":"#f22c40"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"height"}},"id":"1cfac9c1-2737-4ff1-9847-dbd8877c5a6a","type":"Circle"},{"attributes":{"data_source":{"id":"2a6f1eb0-ca2f-4a4c-9db0-29bdf672a004","type":"ColumnDataSource"},"glyph":{"id":"4eae4aab-ac1e-4dfb-890d-d5b3690911e3","type":"Circle"},"hover_glyph":null,"muted_glyph":null},"id":"faa7559f-a5a8-46d4-8e0f-22af1f68c460","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"3d24d759-3901-4aff-8a1f-f23d8630745a","type":"ColumnDataSource"},"glyph":{"id":"955cb880-97bd-4fb7-b91d-44b29f4375d9","type":"Circle"},"hover_glyph":null,"muted_glyph":null},"id":"560eaf1b-3207-40c9-b152-3c8e47f4b188","type":"GlyphRenderer"},{"attributes":{},"id":"b52507ea-6880-4752-8909-90f29ead65b8","type":"ToolEvents"}],"root_ids":["2cdff61f-df50-42d9-b629-a5bc640939b1"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"e867c241-00b6-4007-8021-bcf9a649e53f","elementid":"379641cd-481c-4bf3-a58c-1e1ed013b8a5","modelid":"2cdff61f-df50-42d9-b629-a5bc640939b1"}];
                
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
