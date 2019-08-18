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
      };var element = document.getElementById("4a43b55e-fc5a-4596-9163-427c1e270f09");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '4a43b55e-fc5a-4596-9163-427c1e270f09' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.0.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"4e36d0f2-2e08-4745-9929-4f69cb6a3e45":{"roots":{"references":[{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"value":"#5ab738"},"line_alpha":{"field":"line_alpha"},"line_color":{"value":"#f22c40"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"height"}},"id":"fcb8e1c6-5c33-4d49-8170-29b5b985167c","type":"Circle"},{"attributes":{"axis_label":"Mean( Timing )","formatter":{"id":"df7e5265-4561-4550-bb53-9a5a35b699a1","type":"BasicTickFormatter"},"plot":{"id":"7ee07949-8126-4af8-8869-8a6f040938eb","subtype":"Chart","type":"Plot"},"ticker":{"id":"52137065-4189-4443-b6d2-088e839d7ec7","type":"BasicTicker"}},"id":"8862e7b2-ca12-4ffa-b072-705fc50c02c7","type":"LinearAxis"},{"attributes":{"data_source":{"id":"fcd8316e-ec5e-44e1-9a30-64a7d9e6ba74","type":"ColumnDataSource"},"glyph":{"id":"e8098346-ee3a-4f11-8638-8df0ef798bd3","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"59423ca6-1f11-4e6f-9ef0-83676ba7fcf8","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"a7f1b123-ca91-4a46-b521-29c07057cd7b","type":"CategoricalAxis"}],"height":400,"left":[{"id":"8862e7b2-ca12-4ffa-b072-705fc50c02c7","type":"LinearAxis"}],"renderers":[{"id":"d3342bca-6517-4eaa-bae1-8ce9e3cb2893","type":"BoxAnnotation"},{"id":"582cf328-a6f5-4b36-b7ca-9e4922a5f8f7","type":"GlyphRenderer"},{"id":"b5cb3c68-075b-4f6a-9dfa-392482e3a29b","type":"GlyphRenderer"},{"id":"87035a3d-6ab4-4252-9655-d2577beb7e50","type":"GlyphRenderer"},{"id":"59423ca6-1f11-4e6f-9ef0-83676ba7fcf8","type":"GlyphRenderer"},{"id":"6f4d5950-2e58-4676-b475-742b2be175dc","type":"GlyphRenderer"},{"id":"1a4e8e37-9f81-49e2-91c3-170c82de3105","type":"GlyphRenderer"},{"id":"f6a25693-6543-40bd-ad85-ba4a8f1f457c","type":"Legend"},{"id":"a7f1b123-ca91-4a46-b521-29c07057cd7b","type":"CategoricalAxis"},{"id":"8862e7b2-ca12-4ffa-b072-705fc50c02c7","type":"LinearAxis"},{"id":"9341fd28-7478-459e-9689-f5189abd86a3","type":"Grid"}],"title":{"id":"d36d4a6e-75b6-4bbb-bf4d-06f84525841d","type":"Title"},"tool_events":{"id":"c80ade08-cbfe-4a1b-a9a9-58f3d7405a9f","type":"ToolEvents"},"toolbar":{"id":"e3adc98d-f899-4467-8bb8-70fbbd03e679","type":"Toolbar"},"width":600,"x_mapper_type":"auto","x_range":{"id":"64995de9-b4e4-4d2d-ab03-323edafa09c0","type":"FactorRange"},"y_mapper_type":"auto","y_range":{"id":"ba009b0b-9ced-43ae-959f-0f9a3b1f7101","type":"Range1d"}},"id":"7ee07949-8126-4af8-8869-8a6f040938eb","subtype":"Chart","type":"Plot"},{"attributes":{"data_source":{"id":"603a87fa-4e16-44cd-b394-78bbc26ffd76","type":"ColumnDataSource"},"glyph":{"id":"fcb8e1c6-5c33-4d49-8170-29b5b985167c","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"1a4e8e37-9f81-49e2-91c3-170c82de3105","type":"GlyphRenderer"},{"attributes":{"axis_label":"Interpreter","formatter":{"id":"69352ff8-4900-4a6c-be19-730ce4b5edfd","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"7ee07949-8126-4af8-8869-8a6f040938eb","subtype":"Chart","type":"Plot"},"ticker":{"id":"561f5ea0-5fa7-499b-afe0-2eda37782aeb","type":"CategoricalTicker"}},"id":"a7f1b123-ca91-4a46-b521-29c07057cd7b","type":"CategoricalAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"d3342bca-6517-4eaa-bae1-8ce9e3cb2893","type":"BoxAnnotation"},{"attributes":{"plot":null,"text":"Python Interpreter Sampling"},"id":"d36d4a6e-75b6-4bbb-bf4d-06f84525841d","type":"Title"},{"attributes":{"data_source":{"id":"1a22e9da-5191-4a0b-b5c0-d13db02f5cd7","type":"ColumnDataSource"},"glyph":{"id":"4a124a1f-c222-41dd-9560-34a3448bdcf9","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"6f4d5950-2e58-4676-b475-742b2be175dc","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"value":"#f22c40"},"line_alpha":{"field":"line_alpha"},"line_color":{"value":"#f22c40"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"height"}},"id":"4a124a1f-c222-41dd-9560-34a3448bdcf9","type":"Circle"},{"attributes":{},"id":"69352ff8-4900-4a6c-be19-730ce4b5edfd","type":"CategoricalTickFormatter"},{"attributes":{"overlay":{"id":"d3342bca-6517-4eaa-bae1-8ce9e3cb2893","type":"BoxAnnotation"},"plot":{"id":"7ee07949-8126-4af8-8869-8a6f040938eb","subtype":"Chart","type":"Plot"}},"id":"ca2dfbbf-6337-42d8-ab27-6136298cb332","type":"BoxZoomTool"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"interpreter":"jython","sample":"1st"}],"color":["#f22c40"],"fill_alpha":[0.8],"height":[22.0],"interpreter":["jython"],"label":[{"interpreter":"jython","sample":"1st"}],"line_alpha":[1.0],"line_color":["#f22c40"],"sample":["1st"],"width":[0.2],"x":["jython:0.333333333333"],"y":[11.0]}},"id":"1a22e9da-5191-4a0b-b5c0-d13db02f5cd7","type":"ColumnDataSource"},{"attributes":{},"id":"52137065-4189-4443-b6d2-088e839d7ec7","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"42138fe4-922c-4ac5-a92c-45e4e6c6448d","type":"PanTool"},{"id":"a5dbbb93-b746-4060-b352-c3e1076caab1","type":"WheelZoomTool"},{"id":"ca2dfbbf-6337-42d8-ab27-6136298cb332","type":"BoxZoomTool"},{"id":"d0f65d89-75c6-4e18-b6d2-8f16aa5eb432","type":"SaveTool"},{"id":"9f6cc3d6-dec3-4e8a-8ab7-3607f962ac74","type":"ResetTool"},{"id":"0023f68d-bc06-4525-a050-c244eec30362","type":"HelpTool"}]},"id":"e3adc98d-f899-4467-8bb8-70fbbd03e679","type":"Toolbar"},{"attributes":{"plot":{"id":"7ee07949-8126-4af8-8869-8a6f040938eb","subtype":"Chart","type":"Plot"}},"id":"d0f65d89-75c6-4e18-b6d2-8f16aa5eb432","type":"SaveTool"},{"attributes":{"plot":{"id":"7ee07949-8126-4af8-8869-8a6f040938eb","subtype":"Chart","type":"Plot"}},"id":"0023f68d-bc06-4525-a050-c244eec30362","type":"HelpTool"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"interpreter":"pypy","sample":"2nd"}],"color":["#5ab738"],"fill_alpha":[0.8],"height":[40.0],"interpreter":["pypy"],"label":[{"interpreter":"pypy","sample":"2nd"}],"line_alpha":[1.0],"line_color":["#f22c40"],"sample":["2nd"],"width":[0.2],"x":["pypy:0.666666666667"],"y":[20.0]}},"id":"fcd8316e-ec5e-44e1-9a30-64a7d9e6ba74","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"7ee07949-8126-4af8-8869-8a6f040938eb","subtype":"Chart","type":"Plot"},"ticker":{"id":"52137065-4189-4443-b6d2-088e839d7ec7","type":"BasicTicker"}},"id":"9341fd28-7478-459e-9689-f5189abd86a3","type":"Grid"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"value":"#f22c40"},"line_alpha":{"field":"line_alpha"},"line_color":{"value":"#f22c40"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"height"}},"id":"1f8e5524-dee5-42cf-b7fd-eb25269189c0","type":"Circle"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"interpreter":"python","sample":"2nd"}],"color":["#5ab738"],"fill_alpha":[0.8],"height":[5.0],"interpreter":["python"],"label":[{"interpreter":"python","sample":"2nd"}],"line_alpha":[1.0],"line_color":["#f22c40"],"sample":["2nd"],"width":[0.2],"x":["python:0.666666666667"],"y":[2.5]}},"id":"6315d731-aed6-4872-8657-5e9fc75ef982","type":"ColumnDataSource"},{"attributes":{},"id":"df7e5265-4561-4550-bb53-9a5a35b699a1","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"value":"#f22c40"},"line_alpha":{"field":"line_alpha"},"line_color":{"value":"#f22c40"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"height"}},"id":"981e0004-c772-4212-977a-5a2c3396c510","type":"Circle"},{"attributes":{"legends":[["1st",[{"id":"582cf328-a6f5-4b36-b7ca-9e4922a5f8f7","type":"GlyphRenderer"}]],["2nd",[{"id":"b5cb3c68-075b-4f6a-9dfa-392482e3a29b","type":"GlyphRenderer"}]]],"plot":{"id":"7ee07949-8126-4af8-8869-8a6f040938eb","subtype":"Chart","type":"Plot"}},"id":"f6a25693-6543-40bd-ad85-ba4a8f1f457c","type":"Legend"},{"attributes":{"callback":null,"factors":["jython","pypy","python"]},"id":"64995de9-b4e4-4d2d-ab03-323edafa09c0","type":"FactorRange"},{"attributes":{"data_source":{"id":"9bdc631d-5d3a-497b-8a14-87246e9cd34e","type":"ColumnDataSource"},"glyph":{"id":"981e0004-c772-4212-977a-5a2c3396c510","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"87035a3d-6ab4-4252-9655-d2577beb7e50","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"value":"#5ab738"},"line_alpha":{"field":"line_alpha"},"line_color":{"value":"#f22c40"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"height"}},"id":"e8098346-ee3a-4f11-8638-8df0ef798bd3","type":"Circle"},{"attributes":{"plot":{"id":"7ee07949-8126-4af8-8869-8a6f040938eb","subtype":"Chart","type":"Plot"}},"id":"a5dbbb93-b746-4060-b352-c3e1076caab1","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"7ee07949-8126-4af8-8869-8a6f040938eb","subtype":"Chart","type":"Plot"}},"id":"42138fe4-922c-4ac5-a92c-45e4e6c6448d","type":"PanTool"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"interpreter":"jython","sample":"2nd"}],"color":["#5ab738"],"fill_alpha":[0.8],"height":[30.0],"interpreter":["jython"],"label":[{"interpreter":"jython","sample":"2nd"}],"line_alpha":[1.0],"line_color":["#f22c40"],"sample":["2nd"],"width":[0.2],"x":["jython:0.666666666667"],"y":[15.0]}},"id":"603a87fa-4e16-44cd-b394-78bbc26ffd76","type":"ColumnDataSource"},{"attributes":{"callback":null,"end":41.9,"start":-3.9000000000000004},"id":"ba009b0b-9ced-43ae-959f-0f9a3b1f7101","type":"Range1d"},{"attributes":{"plot":{"id":"7ee07949-8126-4af8-8869-8a6f040938eb","subtype":"Chart","type":"Plot"}},"id":"9f6cc3d6-dec3-4e8a-8ab7-3607f962ac74","type":"ResetTool"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"interpreter":"pypy","sample":"1st"}],"color":["#f22c40"],"fill_alpha":[0.8],"height":[12.0],"interpreter":["pypy"],"label":[{"interpreter":"pypy","sample":"1st"}],"line_alpha":[1.0],"line_color":["#f22c40"],"sample":["1st"],"width":[0.2],"x":["pypy:0.333333333333"],"y":[6.0]}},"id":"9bdc631d-5d3a-497b-8a14-87246e9cd34e","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"interpreter":"python","sample":"1st"}],"color":["#f22c40"],"fill_alpha":[0.8],"height":[-2.0],"interpreter":["python"],"label":[{"interpreter":"python","sample":"1st"}],"line_alpha":[1.0],"line_color":["#f22c40"],"sample":["1st"],"width":[0.2],"x":["python:0.333333333333"],"y":[-1.0]}},"id":"c1564a07-0502-4625-948e-3379794b02b7","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"c1564a07-0502-4625-948e-3379794b02b7","type":"ColumnDataSource"},"glyph":{"id":"1f8e5524-dee5-42cf-b7fd-eb25269189c0","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"582cf328-a6f5-4b36-b7ca-9e4922a5f8f7","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"6315d731-aed6-4872-8657-5e9fc75ef982","type":"ColumnDataSource"},"glyph":{"id":"7010b760-fee8-4459-b456-62d1e91e1268","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"b5cb3c68-075b-4f6a-9dfa-392482e3a29b","type":"GlyphRenderer"},{"attributes":{},"id":"561f5ea0-5fa7-499b-afe0-2eda37782aeb","type":"CategoricalTicker"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"value":"#5ab738"},"line_alpha":{"field":"line_alpha"},"line_color":{"value":"#f22c40"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"height"}},"id":"7010b760-fee8-4459-b456-62d1e91e1268","type":"Circle"},{"attributes":{},"id":"c80ade08-cbfe-4a1b-a9a9-58f3d7405a9f","type":"ToolEvents"}],"root_ids":["7ee07949-8126-4af8-8869-8a6f040938eb"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"4e36d0f2-2e08-4745-9929-4f69cb6a3e45","elementid":"4a43b55e-fc5a-4596-9163-427c1e270f09","modelid":"7ee07949-8126-4af8-8869-8a6f040938eb"}];
              
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