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
      };var element = document.getElementById("cf531173-9f81-4655-8ec5-c7bba3c64c10");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'cf531173-9f81-4655-8ec5-c7bba3c64c10' but no matching script tag was found. ")
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
                var docs_json = {"7727740a-6250-4888-b798-1fae5150adf5":{"roots":{"references":[{"attributes":{},"id":"fca699d7-05b7-4d46-9741-a926c1a197c3","type":"ToolEvents"},{"attributes":{"plot":{"id":"61cc08e5-f984-4517-b346-428b1ccbd05e","subtype":"Figure","type":"Plot"}},"id":"0dc4e255-88f9-4579-aee9-4a701d9410d0","type":"PanTool"},{"attributes":{"callback":null},"id":"35429f46-0f7b-4744-8963-e6a74e1fd4aa","type":"DataRange1d"},{"attributes":{"plot":{"id":"61cc08e5-f984-4517-b346-428b1ccbd05e","subtype":"Figure","type":"Plot"}},"id":"de062e5d-3b05-441a-aac5-ea6f55f81726","type":"SaveTool"},{"attributes":{},"id":"62494ca8-bbb3-4de3-b554-78e172eedd0f","type":"BasicTicker"},{"attributes":{"overlay":{"id":"991f337c-fe98-411b-a956-11d180770421","type":"BoxAnnotation"},"plot":{"id":"61cc08e5-f984-4517-b346-428b1ccbd05e","subtype":"Figure","type":"Plot"}},"id":"60f7b3b1-1fe1-41ff-86c2-8a916e9e730b","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"eec43323-1a7d-45f6-95c1-d3cd70a2f310","type":"BasicTickFormatter"},"plot":{"id":"61cc08e5-f984-4517-b346-428b1ccbd05e","subtype":"Figure","type":"Plot"},"ticker":{"id":"62494ca8-bbb3-4de3-b554-78e172eedd0f","type":"BasicTicker"}},"id":"755abdae-889a-44bd-b1aa-f757a89f804b","type":"LinearAxis"},{"attributes":{"callback":null},"id":"2d77ae99-ded3-4472-b410-ffa7df09a1ad","type":"DataRange1d"},{"attributes":{"plot":{"id":"61cc08e5-f984-4517-b346-428b1ccbd05e","subtype":"Figure","type":"Plot"}},"id":"2c60ea26-6002-47de-848e-cc78cd9d9868","type":"HelpTool"},{"attributes":{"formatter":{"id":"925b6c50-b9f1-46be-abc7-f0eaddc69cdc","type":"BasicTickFormatter"},"plot":{"id":"61cc08e5-f984-4517-b346-428b1ccbd05e","subtype":"Figure","type":"Plot"},"ticker":{"id":"67ee7789-94cc-42cf-b3d0-00dc7dd44f8c","type":"BasicTicker"}},"id":"1349d8bb-fe57-452e-899d-3b95fb51c091","type":"LinearAxis"},{"attributes":{"below":[{"id":"1349d8bb-fe57-452e-899d-3b95fb51c091","type":"LinearAxis"}],"left":[{"id":"755abdae-889a-44bd-b1aa-f757a89f804b","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"1349d8bb-fe57-452e-899d-3b95fb51c091","type":"LinearAxis"},{"id":"08e327e1-e06d-405e-abd3-093acae82a26","type":"Grid"},{"id":"755abdae-889a-44bd-b1aa-f757a89f804b","type":"LinearAxis"},{"id":"4ca60d3e-9818-4343-a517-0c74cf7f376c","type":"Grid"},{"id":"991f337c-fe98-411b-a956-11d180770421","type":"BoxAnnotation"},{"id":"4764ce6b-3029-4315-b918-fff2f46746a4","type":"GlyphRenderer"}],"title":{"id":"e60bf65c-4c39-4629-8523-2c8a3cf1dae7","type":"Title"},"tool_events":{"id":"fca699d7-05b7-4d46-9741-a926c1a197c3","type":"ToolEvents"},"toolbar":{"id":"05324c15-694d-472c-8c00-7ca43f28cad9","type":"Toolbar"},"x_range":{"id":"2d77ae99-ded3-4472-b410-ffa7df09a1ad","type":"DataRange1d"},"y_range":{"id":"35429f46-0f7b-4744-8963-e6a74e1fd4aa","type":"DataRange1d"}},"id":"61cc08e5-f984-4517-b346-428b1ccbd05e","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"eec43323-1a7d-45f6-95c1-d3cd70a2f310","type":"BasicTickFormatter"},{"attributes":{},"id":"67ee7789-94cc-42cf-b3d0-00dc7dd44f8c","type":"BasicTicker"},{"attributes":{"plot":null,"text":""},"id":"e60bf65c-4c39-4629-8523-2c8a3cf1dae7","type":"Title"},{"attributes":{"plot":{"id":"61cc08e5-f984-4517-b346-428b1ccbd05e","subtype":"Figure","type":"Plot"}},"id":"818e512a-e95b-4394-97e2-db5e5475393a","type":"WheelZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"991f337c-fe98-411b-a956-11d180770421","type":"BoxAnnotation"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,8,7,3]}},"id":"3bc788d0-4ae6-4efa-a5ae-6f245a6cdc54","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"61cc08e5-f984-4517-b346-428b1ccbd05e","subtype":"Figure","type":"Plot"},"ticker":{"id":"62494ca8-bbb3-4de3-b554-78e172eedd0f","type":"BasicTicker"}},"id":"4ca60d3e-9818-4343-a517-0c74cf7f376c","type":"Grid"},{"attributes":{"plot":{"id":"61cc08e5-f984-4517-b346-428b1ccbd05e","subtype":"Figure","type":"Plot"}},"id":"e304ee0c-3d35-4d8e-9b19-3c49638443df","type":"ResetTool"},{"attributes":{"data_source":{"id":"3bc788d0-4ae6-4efa-a5ae-6f245a6cdc54","type":"ColumnDataSource"},"glyph":{"id":"e5f0f1d2-240e-48c1-b1ed-69de052f10b9","type":"Patch"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"abb1f46c-0f0a-4fbc-8e01-d6735ca6dd16","type":"Patch"},"selection_glyph":null},"id":"4764ce6b-3029-4315-b918-fff2f46746a4","type":"GlyphRenderer"},{"attributes":{},"id":"925b6c50-b9f1-46be-abc7-f0eaddc69cdc","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"e5f0f1d2-240e-48c1-b1ed-69de052f10b9","type":"Patch"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"0dc4e255-88f9-4579-aee9-4a701d9410d0","type":"PanTool"},{"id":"818e512a-e95b-4394-97e2-db5e5475393a","type":"WheelZoomTool"},{"id":"60f7b3b1-1fe1-41ff-86c2-8a916e9e730b","type":"BoxZoomTool"},{"id":"de062e5d-3b05-441a-aac5-ea6f55f81726","type":"SaveTool"},{"id":"e304ee0c-3d35-4d8e-9b19-3c49638443df","type":"ResetTool"},{"id":"2c60ea26-6002-47de-848e-cc78cd9d9868","type":"HelpTool"}]},"id":"05324c15-694d-472c-8c00-7ca43f28cad9","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"abb1f46c-0f0a-4fbc-8e01-d6735ca6dd16","type":"Patch"},{"attributes":{"plot":{"id":"61cc08e5-f984-4517-b346-428b1ccbd05e","subtype":"Figure","type":"Plot"},"ticker":{"id":"67ee7789-94cc-42cf-b3d0-00dc7dd44f8c","type":"BasicTicker"}},"id":"08e327e1-e06d-405e-abd3-093acae82a26","type":"Grid"}],"root_ids":["61cc08e5-f984-4517-b346-428b1ccbd05e"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"7727740a-6250-4888-b798-1fae5150adf5","elementid":"cf531173-9f81-4655-8ec5-c7bba3c64c10","modelid":"61cc08e5-f984-4517-b346-428b1ccbd05e"}];
                
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
