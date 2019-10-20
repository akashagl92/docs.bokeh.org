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
      };var element = document.getElementById("1a9b6f47-205b-4f4e-8a6e-24e0cff86866");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '1a9b6f47-205b-4f4e-8a6e-24e0cff86866' but no matching script tag was found. ")
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
                var docs_json = {"63e89258-37e0-4649-965f-67589e822fe0":{"roots":{"references":[{"attributes":{"callback":null},"id":"93b36529-1057-46fa-b34b-52deb22ec6b9","type":"DataRange1d"},{"attributes":{},"id":"deddd63c-e4b2-4a9c-985b-3fcddb4bd1df","type":"SaveTool"},{"attributes":{"angle":{"units":"rad","value":1.0471975511965976},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.3},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"e4d68647-313e-4a8b-b9e4-bda1e1b694e6","type":"Ellipse"},{"attributes":{"plot":null,"text":""},"id":"82568548-ac37-4962-b8a4-e218d693a696","type":"Title"},{"attributes":{},"id":"acac0080-c6b2-41bb-bde2-6353cd5c0e46","type":"LinearScale"},{"attributes":{"angle":{"units":"rad","value":1.0471975511965976},"fill_color":{"value":"#CAB2D6"},"height":{"units":"data","value":0.3},"line_color":{"value":"#CAB2D6"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"327345c4-f0c1-446b-b687-a298fe42fdfe","type":"Ellipse"},{"attributes":{},"id":"e6c7547f-84b4-4594-b40e-91ebc75fa8f5","type":"HelpTool"},{"attributes":{},"id":"45628aec-ecae-40c3-8514-a7ef1d5b42a9","type":"BasicTicker"},{"attributes":{},"id":"59775996-51b3-417d-ac5d-2bd0a5c02a03","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"ad459a46-0000-4098-9ddb-9edd2b29a832","type":"ColumnDataSource"},"glyph":{"id":"327345c4-f0c1-446b-b687-a298fe42fdfe","type":"Ellipse"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"e4d68647-313e-4a8b-b9e4-bda1e1b694e6","type":"Ellipse"},"selection_glyph":null,"view":{"id":"dff99831-9a23-4e35-9e10-4255e7c18e17","type":"CDSView"}},"id":"1069e290-bb8e-4545-8133-707556fef1f6","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"638ce8a4-d5f4-489f-8ff8-4a7f19d7a62c","subtype":"Figure","type":"Plot"},"ticker":{"id":"45628aec-ecae-40c3-8514-a7ef1d5b42a9","type":"BasicTicker"}},"id":"83e7dacd-d452-4c0c-8ef5-c0263a9fba11","type":"Grid"},{"attributes":{},"id":"4cc4bbee-0842-4288-88cf-4d25ed85284e","type":"PanTool"},{"attributes":{"callback":null},"id":"f6dd5eef-a137-4ff5-b060-ce71934b63ea","type":"DataRange1d"},{"attributes":{},"id":"6c71c3a8-4a49-42bf-81be-1ab40b539393","type":"ResetTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"4cc4bbee-0842-4288-88cf-4d25ed85284e","type":"PanTool"},{"id":"380f3f02-99a5-4147-a4c6-4138007c750c","type":"WheelZoomTool"},{"id":"879d0562-1d8c-4e46-b463-1739304669bd","type":"BoxZoomTool"},{"id":"deddd63c-e4b2-4a9c-985b-3fcddb4bd1df","type":"SaveTool"},{"id":"6c71c3a8-4a49-42bf-81be-1ab40b539393","type":"ResetTool"},{"id":"e6c7547f-84b4-4594-b40e-91ebc75fa8f5","type":"HelpTool"}]},"id":"65f927e6-85bc-4e22-83a2-fd6ee3e57576","type":"Toolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"43cd6965-afcc-483d-802f-392560e381aa","type":"BoxAnnotation"},{"attributes":{"source":{"id":"ad459a46-0000-4098-9ddb-9edd2b29a832","type":"ColumnDataSource"}},"id":"dff99831-9a23-4e35-9e10-4255e7c18e17","type":"CDSView"},{"attributes":{"formatter":{"id":"b7a6852a-adb2-47d5-bc1e-d226ee53a1c5","type":"BasicTickFormatter"},"plot":{"id":"638ce8a4-d5f4-489f-8ff8-4a7f19d7a62c","subtype":"Figure","type":"Plot"},"ticker":{"id":"cdfe5a68-200c-4949-a62c-f49d35bde67c","type":"BasicTicker"}},"id":"bc080803-1735-4f78-86a7-26568b5103f7","type":"LinearAxis"},{"attributes":{"overlay":{"id":"43cd6965-afcc-483d-802f-392560e381aa","type":"BoxAnnotation"}},"id":"879d0562-1d8c-4e46-b463-1739304669bd","type":"BoxZoomTool"},{"attributes":{},"id":"0c13e9a0-368e-4924-bd2f-cc900d0c5c14","type":"LinearScale"},{"attributes":{},"id":"cdfe5a68-200c-4949-a62c-f49d35bde67c","type":"BasicTicker"},{"attributes":{},"id":"380f3f02-99a5-4147-a4c6-4138007c750c","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"638ce8a4-d5f4-489f-8ff8-4a7f19d7a62c","subtype":"Figure","type":"Plot"},"ticker":{"id":"cdfe5a68-200c-4949-a62c-f49d35bde67c","type":"BasicTicker"}},"id":"780185d6-1c92-42f8-8612-24cf00adfccb","type":"Grid"},{"attributes":{"formatter":{"id":"59775996-51b3-417d-ac5d-2bd0a5c02a03","type":"BasicTickFormatter"},"plot":{"id":"638ce8a4-d5f4-489f-8ff8-4a7f19d7a62c","subtype":"Figure","type":"Plot"},"ticker":{"id":"45628aec-ecae-40c3-8514-a7ef1d5b42a9","type":"BasicTicker"}},"id":"eca51483-a043-4d87-a1eb-b03d092c77f0","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["x","y","width"],"data":{"width":[0.2,0.3,0.1],"x":[1,2,3],"y":[1,2,3]}},"id":"ad459a46-0000-4098-9ddb-9edd2b29a832","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"bc080803-1735-4f78-86a7-26568b5103f7","type":"LinearAxis"}],"left":[{"id":"eca51483-a043-4d87-a1eb-b03d092c77f0","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"bc080803-1735-4f78-86a7-26568b5103f7","type":"LinearAxis"},{"id":"780185d6-1c92-42f8-8612-24cf00adfccb","type":"Grid"},{"id":"eca51483-a043-4d87-a1eb-b03d092c77f0","type":"LinearAxis"},{"id":"83e7dacd-d452-4c0c-8ef5-c0263a9fba11","type":"Grid"},{"id":"43cd6965-afcc-483d-802f-392560e381aa","type":"BoxAnnotation"},{"id":"1069e290-bb8e-4545-8133-707556fef1f6","type":"GlyphRenderer"}],"title":{"id":"82568548-ac37-4962-b8a4-e218d693a696","type":"Title"},"toolbar":{"id":"65f927e6-85bc-4e22-83a2-fd6ee3e57576","type":"Toolbar"},"x_range":{"id":"93b36529-1057-46fa-b34b-52deb22ec6b9","type":"DataRange1d"},"x_scale":{"id":"acac0080-c6b2-41bb-bde2-6353cd5c0e46","type":"LinearScale"},"y_range":{"id":"f6dd5eef-a137-4ff5-b060-ce71934b63ea","type":"DataRange1d"},"y_scale":{"id":"0c13e9a0-368e-4924-bd2f-cc900d0c5c14","type":"LinearScale"}},"id":"638ce8a4-d5f4-489f-8ff8-4a7f19d7a62c","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"b7a6852a-adb2-47d5-bc1e-d226ee53a1c5","type":"BasicTickFormatter"}],"root_ids":["638ce8a4-d5f4-489f-8ff8-4a7f19d7a62c"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"63e89258-37e0-4649-965f-67589e822fe0","elementid":"1a9b6f47-205b-4f4e-8a6e-24e0cff86866","modelid":"638ce8a4-d5f4-489f-8ff8-4a7f19d7a62c"}];
                
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
