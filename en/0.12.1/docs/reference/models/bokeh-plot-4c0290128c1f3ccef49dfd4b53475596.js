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
      };var element = document.getElementById("d2f84bcf-69bb-4abd-b347-c2895f16d669");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd2f84bcf-69bb-4abd-b347-c2895f16d669' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.1.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"d15cba98-8dfa-4218-93bd-d4e5544008d1":{"roots":{"references":[{"attributes":{"data_source":{"id":"176f11c9-6747-46dc-85df-2e0a4cb3c679","type":"ColumnDataSource"},"glyph":{"id":"144df31d-8535-4355-b049-2be2a1332c71","type":"Ellipse"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"60b6bf5a-d866-422e-93bf-548c435b008f","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"667e422c-e81f-4aae-bb4d-1145d005d2ce","type":"Plot"},"ticker":{"id":"29fcb1a1-8173-42f6-90ce-c8a059ddb21a","type":"BasicTicker"}},"id":"44cb8203-25e6-4460-8366-bc398b310dc4","type":"Grid"},{"attributes":{"angle":{"units":"rad","value":-0.7},"fill_color":{"value":"#CAB2D6"},"height":{"field":"h","units":"data"},"width":{"field":"w","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"144df31d-8535-4355-b049-2be2a1332c71","type":"Ellipse"},{"attributes":{"below":[{"id":"f0b5b21c-5249-464b-abdc-bc1f2cada215","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"33a96747-902b-429d-92d8-50f68576d32e","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"60b6bf5a-d866-422e-93bf-548c435b008f","type":"GlyphRenderer"},{"id":"f0b5b21c-5249-464b-abdc-bc1f2cada215","type":"LinearAxis"},{"id":"33a96747-902b-429d-92d8-50f68576d32e","type":"LinearAxis"},{"id":"25343e90-9c8f-43ac-bd02-5c62e16be019","type":"Grid"},{"id":"44cb8203-25e6-4460-8366-bc398b310dc4","type":"Grid"}],"title":null,"tool_events":{"id":"97a70933-e61e-4473-b9ac-ee9f1f963f75","type":"ToolEvents"},"toolbar":{"id":"cbd6cd14-69aa-48ec-bd29-e3419acf1bf0","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"60438762-a58d-4ce5-a98e-9683f9d122a9","type":"DataRange1d"},"y_range":{"id":"c389c919-8f50-498b-8e43-b04625c13064","type":"DataRange1d"}},"id":"667e422c-e81f-4aae-bb4d-1145d005d2ce","type":"Plot"},{"attributes":{"plot":{"id":"667e422c-e81f-4aae-bb4d-1145d005d2ce","type":"Plot"},"ticker":{"id":"2e77137a-1c97-435a-8371-6adf44fe1e4d","type":"BasicTicker"}},"id":"25343e90-9c8f-43ac-bd02-5c62e16be019","type":"Grid"},{"attributes":{"formatter":{"id":"5f4ddd64-1eb9-4ab0-8fa6-92177732b54d","type":"BasicTickFormatter"},"plot":{"id":"667e422c-e81f-4aae-bb4d-1145d005d2ce","type":"Plot"},"ticker":{"id":"29fcb1a1-8173-42f6-90ce-c8a059ddb21a","type":"BasicTicker"}},"id":"33a96747-902b-429d-92d8-50f68576d32e","type":"LinearAxis"},{"attributes":{},"id":"29fcb1a1-8173-42f6-90ce-c8a059ddb21a","type":"BasicTicker"},{"attributes":{},"id":"5f4ddd64-1eb9-4ab0-8fa6-92177732b54d","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"c389c919-8f50-498b-8e43-b04625c13064","type":"DataRange1d"},{"attributes":{},"id":"97a70933-e61e-4473-b9ac-ee9f1f963f75","type":"ToolEvents"},{"attributes":{},"id":"ace94330-5bbb-4481-90a6-4241b24a0a67","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y","h","w","x"],"data":{"h":[0.5,0.4125,0.35,0.3125,0.3,0.3125,0.35,0.4125,0.5],"w":[0.16666666666666666,0.19999999999999998,0.23333333333333334,0.26666666666666666,0.3,0.3333333333333333,0.36666666666666664,0.4,0.43333333333333335],"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"176f11c9-6747-46dc-85df-2e0a4cb3c679","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"cbd6cd14-69aa-48ec-bd29-e3419acf1bf0","type":"Toolbar"},{"attributes":{"callback":null},"id":"60438762-a58d-4ce5-a98e-9683f9d122a9","type":"DataRange1d"},{"attributes":{"formatter":{"id":"ace94330-5bbb-4481-90a6-4241b24a0a67","type":"BasicTickFormatter"},"plot":{"id":"667e422c-e81f-4aae-bb4d-1145d005d2ce","type":"Plot"},"ticker":{"id":"2e77137a-1c97-435a-8371-6adf44fe1e4d","type":"BasicTicker"}},"id":"f0b5b21c-5249-464b-abdc-bc1f2cada215","type":"LinearAxis"},{"attributes":{},"id":"2e77137a-1c97-435a-8371-6adf44fe1e4d","type":"BasicTicker"}],"root_ids":["667e422c-e81f-4aae-bb4d-1145d005d2ce"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"d15cba98-8dfa-4218-93bd-d4e5544008d1","elementid":"d2f84bcf-69bb-4abd-b347-c2895f16d669","modelid":"667e422c-e81f-4aae-bb4d-1145d005d2ce"}];
              
              Bokeh.embed.embed_items(docs_json, render_items);
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.css");
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