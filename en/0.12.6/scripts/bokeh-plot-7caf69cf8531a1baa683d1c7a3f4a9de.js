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
        try {
          window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete window._bokeh_onload_callbacks
        }
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
      };var element = document.getElementById("c4f7765b-4352-4224-ae3e-84513e814337");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c4f7765b-4352-4224-ae3e-84513e814337' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.js"];
    
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
                var docs_json = {"095786e2-b576-4371-98ba-17fe25e37161":{"roots":{"references":[{"attributes":{},"id":"385f786d-65af-4015-8818-a7d62102053a","type":"ToolEvents"},{"attributes":{"plot":{"id":"050412e7-6970-464a-addf-dbd414daf207","subtype":"Figure","type":"Plot"}},"id":"837cdfda-a380-4e48-b7ec-c9f1e838f5a9","type":"SaveTool"},{"attributes":{},"id":"e348fb11-2f94-4c73-a77c-540a25969c7d","type":"BasicTicker"},{"attributes":{"plot":null,"text":""},"id":"bfd6f6fb-b4f4-4ac1-99c7-52cd0f3dc8ce","type":"Title"},{"attributes":{},"id":"14941e5e-e4ef-4148-9607-272af135f942","type":"LinearScale"},{"attributes":{},"id":"866b665e-f321-43fa-ba82-048c5c0bac14","type":"LinearScale"},{"attributes":{},"id":"fe38ddea-2ef7-4c30-b03c-0259261c6fbe","type":"BasicTicker"},{"attributes":{"formatter":{"id":"acc8cafd-307f-498e-8950-217ae3d11316","type":"BasicTickFormatter"},"plot":{"id":"050412e7-6970-464a-addf-dbd414daf207","subtype":"Figure","type":"Plot"},"ticker":{"id":"e348fb11-2f94-4c73-a77c-540a25969c7d","type":"BasicTicker"}},"id":"f7d3af01-59d9-4d1b-8d83-bc95d17395ab","type":"LinearAxis"},{"attributes":{"callback":null},"id":"e5f6b26d-d4f6-4e9a-9fac-60d923c48291","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"b0a42005-1728-4d3a-81c2-73b30cb8600e","type":"PanTool"},{"id":"7044e921-505a-4413-8a58-c48e8105586f","type":"WheelZoomTool"},{"id":"def6d1e6-ea79-4e7d-91ee-f8135d164dfd","type":"BoxZoomTool"},{"id":"837cdfda-a380-4e48-b7ec-c9f1e838f5a9","type":"SaveTool"},{"id":"d1b05f86-552c-48f4-922b-cfa11aefe4f1","type":"ResetTool"},{"id":"45a9a0a4-3ee2-46b8-a0c9-524dfb337020","type":"HelpTool"}]},"id":"8f2b33f4-ce74-456c-bbf9-8b34c66ad131","type":"Toolbar"},{"attributes":{"data_source":{"id":"156ae88b-7f47-458d-94d1-1cef8c73f732","type":"ColumnDataSource"},"glyph":{"id":"c4898989-d641-4eb6-bf1b-0ea39d8b3c49","type":"Oval"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"10d8d0e7-e8ad-4396-bdd8-9ed13758725c","type":"Oval"},"selection_glyph":null},"id":"0887dddc-d3be-456f-b592-64896bce2625","type":"GlyphRenderer"},{"attributes":{},"id":"6ea4a023-0244-46cb-b1f7-a628b82e2614","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"050412e7-6970-464a-addf-dbd414daf207","subtype":"Figure","type":"Plot"}},"id":"45a9a0a4-3ee2-46b8-a0c9-524dfb337020","type":"HelpTool"},{"attributes":{"angle":{"units":"rad","value":1.0471975511965976},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"screen","value":40},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"10d8d0e7-e8ad-4396-bdd8-9ed13758725c","type":"Oval"},{"attributes":{"angle":{"units":"rad","value":1.0471975511965976},"fill_color":{"value":"#CAB2D6"},"height":{"units":"screen","value":40},"line_color":{"value":"#CAB2D6"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"c4898989-d641-4eb6-bf1b-0ea39d8b3c49","type":"Oval"},{"attributes":{},"id":"acc8cafd-307f-498e-8950-217ae3d11316","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"050412e7-6970-464a-addf-dbd414daf207","subtype":"Figure","type":"Plot"}},"id":"7044e921-505a-4413-8a58-c48e8105586f","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"52b787f8-2e57-46ff-b673-05aa24cb8b64","type":"DataRange1d"},{"attributes":{"plot":{"id":"050412e7-6970-464a-addf-dbd414daf207","subtype":"Figure","type":"Plot"}},"id":"b0a42005-1728-4d3a-81c2-73b30cb8600e","type":"PanTool"},{"attributes":{"overlay":{"id":"f604bef8-c193-4035-b630-3260af324aa6","type":"BoxAnnotation"},"plot":{"id":"050412e7-6970-464a-addf-dbd414daf207","subtype":"Figure","type":"Plot"}},"id":"def6d1e6-ea79-4e7d-91ee-f8135d164dfd","type":"BoxZoomTool"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"156ae88b-7f47-458d-94d1-1cef8c73f732","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"050412e7-6970-464a-addf-dbd414daf207","subtype":"Figure","type":"Plot"},"ticker":{"id":"e348fb11-2f94-4c73-a77c-540a25969c7d","type":"BasicTicker"}},"id":"d5d2e382-dc44-43bb-9531-b595e795ecf7","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"050412e7-6970-464a-addf-dbd414daf207","subtype":"Figure","type":"Plot"},"ticker":{"id":"fe38ddea-2ef7-4c30-b03c-0259261c6fbe","type":"BasicTicker"}},"id":"9da51929-83a8-4543-9462-79966bb0c05e","type":"Grid"},{"attributes":{"plot":{"id":"050412e7-6970-464a-addf-dbd414daf207","subtype":"Figure","type":"Plot"}},"id":"d1b05f86-552c-48f4-922b-cfa11aefe4f1","type":"ResetTool"},{"attributes":{"below":[{"id":"f7d3af01-59d9-4d1b-8d83-bc95d17395ab","type":"LinearAxis"}],"left":[{"id":"366a63b4-6190-4ea5-857e-886a92ac10bc","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"f7d3af01-59d9-4d1b-8d83-bc95d17395ab","type":"LinearAxis"},{"id":"d5d2e382-dc44-43bb-9531-b595e795ecf7","type":"Grid"},{"id":"366a63b4-6190-4ea5-857e-886a92ac10bc","type":"LinearAxis"},{"id":"9da51929-83a8-4543-9462-79966bb0c05e","type":"Grid"},{"id":"f604bef8-c193-4035-b630-3260af324aa6","type":"BoxAnnotation"},{"id":"0887dddc-d3be-456f-b592-64896bce2625","type":"GlyphRenderer"}],"title":{"id":"bfd6f6fb-b4f4-4ac1-99c7-52cd0f3dc8ce","type":"Title"},"tool_events":{"id":"385f786d-65af-4015-8818-a7d62102053a","type":"ToolEvents"},"toolbar":{"id":"8f2b33f4-ce74-456c-bbf9-8b34c66ad131","type":"Toolbar"},"x_range":{"id":"e5f6b26d-d4f6-4e9a-9fac-60d923c48291","type":"DataRange1d"},"x_scale":{"id":"866b665e-f321-43fa-ba82-048c5c0bac14","type":"LinearScale"},"y_range":{"id":"52b787f8-2e57-46ff-b673-05aa24cb8b64","type":"DataRange1d"},"y_scale":{"id":"14941e5e-e4ef-4148-9607-272af135f942","type":"LinearScale"}},"id":"050412e7-6970-464a-addf-dbd414daf207","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"6ea4a023-0244-46cb-b1f7-a628b82e2614","type":"BasicTickFormatter"},"plot":{"id":"050412e7-6970-464a-addf-dbd414daf207","subtype":"Figure","type":"Plot"},"ticker":{"id":"fe38ddea-2ef7-4c30-b03c-0259261c6fbe","type":"BasicTicker"}},"id":"366a63b4-6190-4ea5-857e-886a92ac10bc","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"f604bef8-c193-4035-b630-3260af324aa6","type":"BoxAnnotation"}],"root_ids":["050412e7-6970-464a-addf-dbd414daf207"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"095786e2-b576-4371-98ba-17fe25e37161","elementid":"c4f7765b-4352-4224-ae3e-84513e814337","modelid":"050412e7-6970-464a-addf-dbd414daf207"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
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
