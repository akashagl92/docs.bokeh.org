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
      };var element = document.getElementById("d315f31d-a621-4dd7-b0fd-8782b6ea1404");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd315f31d-a621-4dd7-b0fd-8782b6ea1404' but no matching script tag was found. ")
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
                var docs_json = {"f9c51b87-7c41-4a99-89cb-b0bd14bce2dd":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"e414a35d-95b3-45e4-9fe3-0e3980be9b87","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"2ca2f49d-0331-4b36-a285-39bc3ffbeb4b","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"e414a35d-95b3-45e4-9fe3-0e3980be9b87","type":"ColumnDataSource"},"glyph":{"id":"e4a9e513-99f2-4109-a3f2-1eb3a8d6f98b","type":"Ray"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"d05a4732-fa9b-4769-a971-06bc64b93e84","type":"Ray"},"selection_glyph":null,"view":{"id":"dbc0dc9c-1cf4-43e6-8f94-ac4c819a5822","type":"CDSView"}},"id":"4dcbfed5-4d5a-4798-b030-1c5c3275e69c","type":"GlyphRenderer"},{"attributes":{},"id":"c34c81c6-3fe1-4f85-afeb-c4a5638d2530","type":"PanTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"c34c81c6-3fe1-4f85-afeb-c4a5638d2530","type":"PanTool"},{"id":"7acc9199-6974-469b-8043-51896625870c","type":"WheelZoomTool"},{"id":"697b4de5-07f9-497e-9df6-60bc25e4eed3","type":"BoxZoomTool"},{"id":"348139ba-d958-4750-a9e0-b63c0996a6f9","type":"SaveTool"},{"id":"9ac1fd90-7370-4495-9e86-624a82832e71","type":"ResetTool"},{"id":"f9fa4d86-543b-49b6-ad4f-23835256c18e","type":"HelpTool"}]},"id":"ee6e4f0a-eebe-48e5-86d5-e7d53913dff0","type":"Toolbar"},{"attributes":{"source":{"id":"e414a35d-95b3-45e4-9fe3-0e3980be9b87","type":"ColumnDataSource"}},"id":"dbc0dc9c-1cf4-43e6-8f94-ac4c819a5822","type":"CDSView"},{"attributes":{"formatter":{"id":"2cef7ab8-817c-46d8-8216-70c83e215bae","type":"BasicTickFormatter"},"plot":{"id":"08f00d40-808e-4b1d-9e55-8b5b5fd118df","subtype":"Figure","type":"Plot"},"ticker":{"id":"512194c8-5fcf-478b-a6b8-5037df6d2327","type":"BasicTicker"}},"id":"a330eee0-994f-4f6c-8684-413072e0bb62","type":"LinearAxis"},{"attributes":{},"id":"7acc9199-6974-469b-8043-51896625870c","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"eefe9a2c-4aaf-4fa5-a3f5-632d04dcbbad","type":"DataRange1d"},{"attributes":{"overlay":{"id":"2ca2f49d-0331-4b36-a285-39bc3ffbeb4b","type":"BoxAnnotation"}},"id":"697b4de5-07f9-497e-9df6-60bc25e4eed3","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"08f00d40-808e-4b1d-9e55-8b5b5fd118df","subtype":"Figure","type":"Plot"},"ticker":{"id":"512194c8-5fcf-478b-a6b8-5037df6d2327","type":"BasicTicker"}},"id":"6d22fcd1-3e1d-4c40-b14d-0f5a236644da","type":"Grid"},{"attributes":{},"id":"348139ba-d958-4750-a9e0-b63c0996a6f9","type":"SaveTool"},{"attributes":{"angle":{"units":"rad","value":-0.7},"length":{"units":"data","value":45},"line_color":{"value":"#FB8072"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"e4a9e513-99f2-4109-a3f2-1eb3a8d6f98b","type":"Ray"},{"attributes":{},"id":"9ac1fd90-7370-4495-9e86-624a82832e71","type":"ResetTool"},{"attributes":{"callback":null},"id":"812d6df4-3974-462c-a587-b192ceb4486e","type":"DataRange1d"},{"attributes":{},"id":"f9fa4d86-543b-49b6-ad4f-23835256c18e","type":"HelpTool"},{"attributes":{},"id":"e9e1a9a8-95e9-4011-b342-a19cd7a373a2","type":"LinearScale"},{"attributes":{"plot":null,"text":""},"id":"3ba7e704-2144-4195-a042-6f35a660416c","type":"Title"},{"attributes":{},"id":"c4a1ff5e-ee93-42b4-88bb-0199db44679e","type":"LinearScale"},{"attributes":{},"id":"512194c8-5fcf-478b-a6b8-5037df6d2327","type":"BasicTicker"},{"attributes":{},"id":"79e73be4-ee48-4422-9794-135907abd2d3","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"79e73be4-ee48-4422-9794-135907abd2d3","type":"BasicTickFormatter"},"plot":{"id":"08f00d40-808e-4b1d-9e55-8b5b5fd118df","subtype":"Figure","type":"Plot"},"ticker":{"id":"3a1c9a08-fe04-4baa-bc92-de39ff9275fd","type":"BasicTicker"}},"id":"3bd31f7a-952c-4fdf-b6b4-110f20492886","type":"LinearAxis"},{"attributes":{},"id":"3a1c9a08-fe04-4baa-bc92-de39ff9275fd","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"08f00d40-808e-4b1d-9e55-8b5b5fd118df","subtype":"Figure","type":"Plot"},"ticker":{"id":"3a1c9a08-fe04-4baa-bc92-de39ff9275fd","type":"BasicTicker"}},"id":"3b0eeb31-b41e-4be1-9cab-b85e74c22f9e","type":"Grid"},{"attributes":{"angle":{"units":"rad","value":-0.7},"length":{"units":"data","value":45},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"d05a4732-fa9b-4769-a971-06bc64b93e84","type":"Ray"},{"attributes":{},"id":"2cef7ab8-817c-46d8-8216-70c83e215bae","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"a330eee0-994f-4f6c-8684-413072e0bb62","type":"LinearAxis"}],"left":[{"id":"3bd31f7a-952c-4fdf-b6b4-110f20492886","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"a330eee0-994f-4f6c-8684-413072e0bb62","type":"LinearAxis"},{"id":"6d22fcd1-3e1d-4c40-b14d-0f5a236644da","type":"Grid"},{"id":"3bd31f7a-952c-4fdf-b6b4-110f20492886","type":"LinearAxis"},{"id":"3b0eeb31-b41e-4be1-9cab-b85e74c22f9e","type":"Grid"},{"id":"2ca2f49d-0331-4b36-a285-39bc3ffbeb4b","type":"BoxAnnotation"},{"id":"4dcbfed5-4d5a-4798-b030-1c5c3275e69c","type":"GlyphRenderer"}],"title":{"id":"3ba7e704-2144-4195-a042-6f35a660416c","type":"Title"},"toolbar":{"id":"ee6e4f0a-eebe-48e5-86d5-e7d53913dff0","type":"Toolbar"},"x_range":{"id":"eefe9a2c-4aaf-4fa5-a3f5-632d04dcbbad","type":"DataRange1d"},"x_scale":{"id":"e9e1a9a8-95e9-4011-b342-a19cd7a373a2","type":"LinearScale"},"y_range":{"id":"812d6df4-3974-462c-a587-b192ceb4486e","type":"DataRange1d"},"y_scale":{"id":"c4a1ff5e-ee93-42b4-88bb-0199db44679e","type":"LinearScale"}},"id":"08f00d40-808e-4b1d-9e55-8b5b5fd118df","subtype":"Figure","type":"Plot"}],"root_ids":["08f00d40-808e-4b1d-9e55-8b5b5fd118df"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"f9c51b87-7c41-4a99-89cb-b0bd14bce2dd","elementid":"d315f31d-a621-4dd7-b0fd-8782b6ea1404","modelid":"08f00d40-808e-4b1d-9e55-8b5b5fd118df"}];
                
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
