document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = "";
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force !== "") {
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
      };var element = document.getElementById("fef6ad0a-997c-4969-a4c9-95e77654dbdc");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'fef6ad0a-997c-4969-a4c9-95e77654dbdc' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.2.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              Bokeh.safely(function() {
                  var docs_json = {"613fb810-1a65-4d22-9cf9-abcfac577bdd":{"roots":{"references":[{"attributes":{"below":[{"id":"779e7a17-d043-4881-9edc-201b022a6bab","type":"LinearAxis"}],"left":[{"id":"3898cf64-f895-4ee9-ab4a-f02bd77d80b5","type":"LinearAxis"}],"plot_height":300,"renderers":[{"id":"779e7a17-d043-4881-9edc-201b022a6bab","type":"LinearAxis"},{"id":"cd2cca91-3495-40f6-a366-5eab2ca88a5c","type":"Grid"},{"id":"3898cf64-f895-4ee9-ab4a-f02bd77d80b5","type":"LinearAxis"},{"id":"18e869c5-082e-4af6-879c-020038e4ff95","type":"Grid"},{"id":"c72ba932-747f-4e70-a8d7-0cb636d2f565","type":"BoxAnnotation"},{"id":"707bd528-9e48-456c-a67a-8baee34b68cc","type":"GlyphRenderer"}],"title":{"id":"cedbaf9c-7524-458e-b713-5aecca92a9b6","type":"Title"},"tool_events":{"id":"772ef0f5-02b7-4bbf-a8e5-6d09e39f5606","type":"ToolEvents"},"toolbar":{"id":"7c16bece-c9ab-4679-90dd-36f3f283e021","type":"Toolbar"},"toolbar_location":"above","x_range":{"id":"9c92e7ce-7894-45ee-a147-8ad13c5b4e02","type":"DataRange1d"},"y_range":{"id":"e21080b6-bddb-41c0-92d1-81aee403f418","type":"DataRange1d"}},"id":"a15deb1e-4f47-4585-b166-efe025dc0d90","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"2a2da92b-c7e5-4b5f-8cc5-1bbde5fb1303","type":"ColumnDataSource"},"glyph":{"id":"5c2becb9-2a97-4357-a00f-ee51a00f5202","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"a4701716-48bd-43a9-8ccd-eeb006cd9fde","type":"Circle"},"selection_glyph":null},"id":"707bd528-9e48-456c-a67a-8baee34b68cc","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"a15deb1e-4f47-4585-b166-efe025dc0d90","subtype":"Figure","type":"Plot"}},"id":"6ae48c73-82ad-45ca-beff-804f917ee3ea","type":"ResetTool"},{"attributes":{"plot":{"id":"a15deb1e-4f47-4585-b166-efe025dc0d90","subtype":"Figure","type":"Plot"}},"id":"b2bb1bb9-986e-4ced-8c3a-a2c9b3e501a1","type":"HelpTool"},{"attributes":{"formatter":{"id":"7cc84152-97cf-4e49-b33b-2b2898036f4e","type":"BasicTickFormatter"},"plot":{"id":"a15deb1e-4f47-4585-b166-efe025dc0d90","subtype":"Figure","type":"Plot"},"ticker":{"id":"886777d4-2973-4182-b50e-dc8cc8a8e23e","type":"BasicTicker"}},"id":"3898cf64-f895-4ee9-ab4a-f02bd77d80b5","type":"LinearAxis"},{"attributes":{"plot":{"id":"a15deb1e-4f47-4585-b166-efe025dc0d90","subtype":"Figure","type":"Plot"}},"id":"3c73b4c1-3fb1-4a94-9440-c36cc2c4ae58","type":"SaveTool"},{"attributes":{},"id":"46f9bfc5-89b7-4b8e-82a6-b286509c1455","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"c72ba932-747f-4e70-a8d7-0cb636d2f565","type":"BoxAnnotation"},{"attributes":{},"id":"7cc84152-97cf-4e49-b33b-2b2898036f4e","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"a15deb1e-4f47-4585-b166-efe025dc0d90","subtype":"Figure","type":"Plot"}},"id":"dfc2d371-68c6-4887-9ae7-1bc05bcf724d","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"46f9bfc5-89b7-4b8e-82a6-b286509c1455","type":"BasicTickFormatter"},"plot":{"id":"a15deb1e-4f47-4585-b166-efe025dc0d90","subtype":"Figure","type":"Plot"},"ticker":{"id":"8ff849a1-15e4-447a-bc20-d49691abe34c","type":"BasicTicker"}},"id":"779e7a17-d043-4881-9edc-201b022a6bab","type":"LinearAxis"},{"attributes":{"plot":{"id":"a15deb1e-4f47-4585-b166-efe025dc0d90","subtype":"Figure","type":"Plot"},"ticker":{"id":"8ff849a1-15e4-447a-bc20-d49691abe34c","type":"BasicTicker"}},"id":"cd2cca91-3495-40f6-a366-5eab2ca88a5c","type":"Grid"},{"attributes":{"callback":null},"id":"9c92e7ce-7894-45ee-a147-8ad13c5b4e02","type":"DataRange1d"},{"attributes":{},"id":"886777d4-2973-4182-b50e-dc8cc8a8e23e","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2],"y":[3,4]}},"id":"2a2da92b-c7e5-4b5f-8cc5-1bbde5fb1303","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"e21080b6-bddb-41c0-92d1-81aee403f418","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"5c2becb9-2a97-4357-a00f-ee51a00f5202","type":"Circle"},{"attributes":{"overlay":{"id":"c72ba932-747f-4e70-a8d7-0cb636d2f565","type":"BoxAnnotation"},"plot":{"id":"a15deb1e-4f47-4585-b166-efe025dc0d90","subtype":"Figure","type":"Plot"}},"id":"92be9137-85f4-460a-b250-794e79fb4bbc","type":"BoxZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"a15deb1e-4f47-4585-b166-efe025dc0d90","subtype":"Figure","type":"Plot"},"ticker":{"id":"886777d4-2973-4182-b50e-dc8cc8a8e23e","type":"BasicTicker"}},"id":"18e869c5-082e-4af6-879c-020038e4ff95","type":"Grid"},{"attributes":{},"id":"8ff849a1-15e4-447a-bc20-d49691abe34c","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"a4701716-48bd-43a9-8ccd-eeb006cd9fde","type":"Circle"},{"attributes":{"plot":null,"text":"Top Title with Toolbar"},"id":"cedbaf9c-7524-458e-b713-5aecca92a9b6","type":"Title"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"0fb34fd6-2676-45ed-b5fd-086128ce3083","type":"PanTool"},{"id":"dfc2d371-68c6-4887-9ae7-1bc05bcf724d","type":"WheelZoomTool"},{"id":"92be9137-85f4-460a-b250-794e79fb4bbc","type":"BoxZoomTool"},{"id":"3c73b4c1-3fb1-4a94-9440-c36cc2c4ae58","type":"SaveTool"},{"id":"6ae48c73-82ad-45ca-beff-804f917ee3ea","type":"ResetTool"},{"id":"b2bb1bb9-986e-4ced-8c3a-a2c9b3e501a1","type":"HelpTool"}]},"id":"7c16bece-c9ab-4679-90dd-36f3f283e021","type":"Toolbar"},{"attributes":{"plot":{"id":"a15deb1e-4f47-4585-b166-efe025dc0d90","subtype":"Figure","type":"Plot"}},"id":"0fb34fd6-2676-45ed-b5fd-086128ce3083","type":"PanTool"},{"attributes":{},"id":"772ef0f5-02b7-4bbf-a8e5-6d09e39f5606","type":"ToolEvents"}],"root_ids":["a15deb1e-4f47-4585-b166-efe025dc0d90"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"613fb810-1a65-4d22-9cf9-abcfac577bdd","elementid":"fef6ad0a-997c-4969-a4c9-95e77654dbdc","modelid":"a15deb1e-4f47-4585-b166-efe025dc0d90"}];
                  
                  Bokeh.embed.embed_items(docs_json, render_items);
              });
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.css");
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