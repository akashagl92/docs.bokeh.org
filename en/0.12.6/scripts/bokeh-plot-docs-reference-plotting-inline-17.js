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
      };var element = document.getElementById("ed7b046c-1886-41dd-8845-563497b8cf55");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ed7b046c-1886-41dd-8845-563497b8cf55' but no matching script tag was found. ")
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
                var docs_json = {"441d1e89-973d-4a52-a8fe-a77e1642e9ff":{"roots":{"references":[{"attributes":{"plot":{"id":"7757a58f-bb71-4391-9389-e947ae06dd47","subtype":"Figure","type":"Plot"}},"id":"c5fd0c2d-15f6-488d-a75a-e4b81f45549a","type":"WheelZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"7757a58f-bb71-4391-9389-e947ae06dd47","subtype":"Figure","type":"Plot"},"ticker":{"id":"d118e1bc-83e7-44b3-aedd-e2f40a187b26","type":"BasicTicker"}},"id":"fa5f5e5f-89b1-4e0a-9d7e-f89863eb7ed9","type":"Grid"},{"attributes":{},"id":"ba90aa0b-8e2c-4e83-9f7a-609b94e99862","type":"ToolEvents"},{"attributes":{},"id":"8fb2e103-bda1-4cc0-b343-d4cd7052286d","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"7757a58f-bb71-4391-9389-e947ae06dd47","subtype":"Figure","type":"Plot"}},"id":"9869fa97-778d-48fc-ad66-9f6cd51a6c07","type":"HelpTool"},{"attributes":{"callback":null},"id":"6ef6d126-aee0-47a6-9e43-64687792758e","type":"DataRange1d"},{"attributes":{"angle":{"units":"rad","value":-0.7},"length":{"units":"data","value":45},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"b71cad43-e4d5-480e-8ae7-7da9ed092fcc","type":"Ray"},{"attributes":{},"id":"613f2cf2-dc58-4df0-afb2-e1810cdd5497","type":"LinearScale"},{"attributes":{"formatter":{"id":"911478dc-8605-4731-b541-cdcf9f988eeb","type":"BasicTickFormatter"},"plot":{"id":"7757a58f-bb71-4391-9389-e947ae06dd47","subtype":"Figure","type":"Plot"},"ticker":{"id":"d118e1bc-83e7-44b3-aedd-e2f40a187b26","type":"BasicTicker"}},"id":"692d0924-892b-458a-b8a6-d3ebe7f87112","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"0bf31277-0bd3-423a-bb25-9fad9f449e83","type":"PanTool"},{"id":"c5fd0c2d-15f6-488d-a75a-e4b81f45549a","type":"WheelZoomTool"},{"id":"67c4e22f-8445-4889-81c7-94ec8f823184","type":"BoxZoomTool"},{"id":"6c5647b1-5630-4547-b6a1-8c5108a67629","type":"SaveTool"},{"id":"105cb402-25ae-47af-aba3-0056ff84ced2","type":"ResetTool"},{"id":"9869fa97-778d-48fc-ad66-9f6cd51a6c07","type":"HelpTool"}]},"id":"4a4077ed-0672-4943-b77e-45ba8ae84a86","type":"Toolbar"},{"attributes":{"overlay":{"id":"9184bc19-eb8e-4f10-9bd8-8b6bbeb745d0","type":"BoxAnnotation"},"plot":{"id":"7757a58f-bb71-4391-9389-e947ae06dd47","subtype":"Figure","type":"Plot"}},"id":"67c4e22f-8445-4889-81c7-94ec8f823184","type":"BoxZoomTool"},{"attributes":{"plot":null,"text":""},"id":"99f89fbf-4627-47d1-b53e-e19ace5c964a","type":"Title"},{"attributes":{},"id":"911478dc-8605-4731-b541-cdcf9f988eeb","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"af9de0aa-2fa9-47d3-8ab1-cc6369ba2fb2","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"266aff7c-d808-4ed8-8db6-bf809ca4bb3f","type":"ColumnDataSource"},{"attributes":{},"id":"d118e1bc-83e7-44b3-aedd-e2f40a187b26","type":"BasicTicker"},{"attributes":{"data_source":{"id":"266aff7c-d808-4ed8-8db6-bf809ca4bb3f","type":"ColumnDataSource"},"glyph":{"id":"9e2d0bf2-540b-4a71-bfd4-1adcb3ffee7d","type":"Ray"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"b71cad43-e4d5-480e-8ae7-7da9ed092fcc","type":"Ray"},"selection_glyph":null},"id":"7e30ec96-9217-4da5-9126-d7e05032b479","type":"GlyphRenderer"},{"attributes":{},"id":"0abb2766-c018-43ed-86c7-63558e30b17c","type":"LinearScale"},{"attributes":{"below":[{"id":"5c467491-e2d6-4347-a7f5-bdd1c3362ef3","type":"LinearAxis"}],"left":[{"id":"692d0924-892b-458a-b8a6-d3ebe7f87112","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"5c467491-e2d6-4347-a7f5-bdd1c3362ef3","type":"LinearAxis"},{"id":"27dcf2fe-2708-4877-bc82-99a819224aa8","type":"Grid"},{"id":"692d0924-892b-458a-b8a6-d3ebe7f87112","type":"LinearAxis"},{"id":"fa5f5e5f-89b1-4e0a-9d7e-f89863eb7ed9","type":"Grid"},{"id":"9184bc19-eb8e-4f10-9bd8-8b6bbeb745d0","type":"BoxAnnotation"},{"id":"7e30ec96-9217-4da5-9126-d7e05032b479","type":"GlyphRenderer"}],"title":{"id":"99f89fbf-4627-47d1-b53e-e19ace5c964a","type":"Title"},"tool_events":{"id":"ba90aa0b-8e2c-4e83-9f7a-609b94e99862","type":"ToolEvents"},"toolbar":{"id":"4a4077ed-0672-4943-b77e-45ba8ae84a86","type":"Toolbar"},"x_range":{"id":"af9de0aa-2fa9-47d3-8ab1-cc6369ba2fb2","type":"DataRange1d"},"x_scale":{"id":"0abb2766-c018-43ed-86c7-63558e30b17c","type":"LinearScale"},"y_range":{"id":"6ef6d126-aee0-47a6-9e43-64687792758e","type":"DataRange1d"},"y_scale":{"id":"613f2cf2-dc58-4df0-afb2-e1810cdd5497","type":"LinearScale"}},"id":"7757a58f-bb71-4391-9389-e947ae06dd47","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"8fb2e103-bda1-4cc0-b343-d4cd7052286d","type":"BasicTickFormatter"},"plot":{"id":"7757a58f-bb71-4391-9389-e947ae06dd47","subtype":"Figure","type":"Plot"},"ticker":{"id":"7c9027d4-a299-4635-b692-2b0b49edd9e1","type":"BasicTicker"}},"id":"5c467491-e2d6-4347-a7f5-bdd1c3362ef3","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"9184bc19-eb8e-4f10-9bd8-8b6bbeb745d0","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"7757a58f-bb71-4391-9389-e947ae06dd47","subtype":"Figure","type":"Plot"},"ticker":{"id":"7c9027d4-a299-4635-b692-2b0b49edd9e1","type":"BasicTicker"}},"id":"27dcf2fe-2708-4877-bc82-99a819224aa8","type":"Grid"},{"attributes":{"plot":{"id":"7757a58f-bb71-4391-9389-e947ae06dd47","subtype":"Figure","type":"Plot"}},"id":"6c5647b1-5630-4547-b6a1-8c5108a67629","type":"SaveTool"},{"attributes":{"angle":{"units":"rad","value":-0.7},"length":{"units":"data","value":45},"line_color":{"value":"#FB8072"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"9e2d0bf2-540b-4a71-bfd4-1adcb3ffee7d","type":"Ray"},{"attributes":{"plot":{"id":"7757a58f-bb71-4391-9389-e947ae06dd47","subtype":"Figure","type":"Plot"}},"id":"0bf31277-0bd3-423a-bb25-9fad9f449e83","type":"PanTool"},{"attributes":{},"id":"7c9027d4-a299-4635-b692-2b0b49edd9e1","type":"BasicTicker"},{"attributes":{"plot":{"id":"7757a58f-bb71-4391-9389-e947ae06dd47","subtype":"Figure","type":"Plot"}},"id":"105cb402-25ae-47af-aba3-0056ff84ced2","type":"ResetTool"}],"root_ids":["7757a58f-bb71-4391-9389-e947ae06dd47"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"441d1e89-973d-4a52-a8fe-a77e1642e9ff","elementid":"ed7b046c-1886-41dd-8845-563497b8cf55","modelid":"7757a58f-bb71-4391-9389-e947ae06dd47"}];
                
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
