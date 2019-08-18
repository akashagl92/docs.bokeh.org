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
      };var element = document.getElementById("b1762173-abc5-4282-a5f3-7cc004f635cb");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'b1762173-abc5-4282-a5f3-7cc004f635cb' but no matching script tag was found. ")
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
                var docs_json = {"3c18b8df-86b1-4291-a7a8-619b8d3f712f":{"roots":{"references":[{"attributes":{},"id":"2e78e4eb-fe40-4fac-8ac9-3b47a4e0bd9b","type":"LinearScale"},{"attributes":{},"id":"c8640656-f5cb-48c3-a46c-c23c9fb2c52e","type":"PanTool"},{"attributes":{"formatter":{"id":"fdbcdc54-217b-4f48-88f1-d69b60717296","type":"BasicTickFormatter"},"plot":{"id":"ebfa30eb-83d8-4ae0-853b-8cdcb9aae393","subtype":"Figure","type":"Plot"},"ticker":{"id":"5ef45a44-0e75-4829-8483-dd9b9cbec3d1","type":"BasicTicker"}},"id":"027650b9-81dd-42fe-9c62-fca3e7df733b","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"ebfa30eb-83d8-4ae0-853b-8cdcb9aae393","subtype":"Figure","type":"Plot"},"ticker":{"id":"c4d57327-53af-43dc-84eb-00fc8fe2033b","type":"BasicTicker"}},"id":"ffba192c-6afd-4517-84f6-2bbab96cec34","type":"Grid"},{"attributes":{"source":{"id":"04b0d628-95b2-4ab4-8271-36a85d72adf9","type":"ColumnDataSource"}},"id":"78c73d1c-572b-40c9-849d-fb080b403b54","type":"CDSView"},{"attributes":{},"id":"95418c4c-b61a-4904-97ca-419cfd538e3b","type":"HelpTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"04b0d628-95b2-4ab4-8271-36a85d72adf9","type":"ColumnDataSource"},{"attributes":{},"id":"5ef45a44-0e75-4829-8483-dd9b9cbec3d1","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"c8640656-f5cb-48c3-a46c-c23c9fb2c52e","type":"PanTool"},{"id":"6a8b7363-f488-4d36-83ea-0fbeb0a6fb5b","type":"WheelZoomTool"},{"id":"c4cca11a-1a35-4400-806e-1c013d1f3ea7","type":"BoxZoomTool"},{"id":"0018febb-bfec-40c6-8c0b-9835fc54e806","type":"SaveTool"},{"id":"6f1a8be1-998b-4394-ba42-aa6fb00fc0d0","type":"ResetTool"},{"id":"95418c4c-b61a-4904-97ca-419cfd538e3b","type":"HelpTool"}]},"id":"aaab65ea-4b10-4236-aa93-6f4e491d98f3","type":"Toolbar"},{"attributes":{"callback":null},"id":"5eb6d8dd-0f9d-44ec-bb36-d49d99433163","type":"DataRange1d"},{"attributes":{"formatter":{"id":"ded8a3ba-2ebe-439f-9d51-22333dad5995","type":"BasicTickFormatter"},"plot":{"id":"ebfa30eb-83d8-4ae0-853b-8cdcb9aae393","subtype":"Figure","type":"Plot"},"ticker":{"id":"c4d57327-53af-43dc-84eb-00fc8fe2033b","type":"BasicTicker"}},"id":"d7fb01f9-226d-4674-900c-9909f0dface3","type":"LinearAxis"},{"attributes":{},"id":"0018febb-bfec-40c6-8c0b-9835fc54e806","type":"SaveTool"},{"attributes":{},"id":"6f1a8be1-998b-4394-ba42-aa6fb00fc0d0","type":"ResetTool"},{"attributes":{"plot":null,"text":""},"id":"0a0286e6-84e8-4cb9-85aa-6fe3d806ffaf","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"inner_radius":{"units":"data","value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"outer_radius":{"units":"data","value":0.25},"x":{"field":"x"},"y":{"field":"y"}},"id":"c02d7abd-4a41-4dc1-8d59-2efc9b00c5c5","type":"Annulus"},{"attributes":{},"id":"fdbcdc54-217b-4f48-88f1-d69b60717296","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"bde2f033-79ac-4760-9a27-7772e2435d80","type":"BoxAnnotation"}},"id":"c4cca11a-1a35-4400-806e-1c013d1f3ea7","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"04b0d628-95b2-4ab4-8271-36a85d72adf9","type":"ColumnDataSource"},"glyph":{"id":"3535cc22-2d5b-42d5-acde-e86d3341315c","type":"Annulus"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"c02d7abd-4a41-4dc1-8d59-2efc9b00c5c5","type":"Annulus"},"selection_glyph":null,"view":{"id":"78c73d1c-572b-40c9-849d-fb080b403b54","type":"CDSView"}},"id":"8dbd039f-b827-4f9a-92a4-4ee51a522e57","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"f30c70b4-c087-4b5c-99e5-49df0abae750","type":"DataRange1d"},{"attributes":{"below":[{"id":"027650b9-81dd-42fe-9c62-fca3e7df733b","type":"LinearAxis"}],"left":[{"id":"d7fb01f9-226d-4674-900c-9909f0dface3","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"027650b9-81dd-42fe-9c62-fca3e7df733b","type":"LinearAxis"},{"id":"51378e72-f15e-4d31-a003-69aa1c0e2616","type":"Grid"},{"id":"d7fb01f9-226d-4674-900c-9909f0dface3","type":"LinearAxis"},{"id":"ffba192c-6afd-4517-84f6-2bbab96cec34","type":"Grid"},{"id":"bde2f033-79ac-4760-9a27-7772e2435d80","type":"BoxAnnotation"},{"id":"8dbd039f-b827-4f9a-92a4-4ee51a522e57","type":"GlyphRenderer"}],"title":{"id":"0a0286e6-84e8-4cb9-85aa-6fe3d806ffaf","type":"Title"},"toolbar":{"id":"aaab65ea-4b10-4236-aa93-6f4e491d98f3","type":"Toolbar"},"x_range":{"id":"5eb6d8dd-0f9d-44ec-bb36-d49d99433163","type":"DataRange1d"},"x_scale":{"id":"2e78e4eb-fe40-4fac-8ac9-3b47a4e0bd9b","type":"LinearScale"},"y_range":{"id":"f30c70b4-c087-4b5c-99e5-49df0abae750","type":"DataRange1d"},"y_scale":{"id":"5c744801-ed6d-4680-8c37-ef779b46fb3a","type":"LinearScale"}},"id":"ebfa30eb-83d8-4ae0-853b-8cdcb9aae393","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"bde2f033-79ac-4760-9a27-7772e2435d80","type":"BoxAnnotation"},{"attributes":{},"id":"c4d57327-53af-43dc-84eb-00fc8fe2033b","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.6},"fill_color":{"value":"orange"},"inner_radius":{"units":"data","value":0.1},"line_alpha":{"value":0.6},"line_color":{"value":"orange"},"outer_radius":{"units":"data","value":0.25},"x":{"field":"x"},"y":{"field":"y"}},"id":"3535cc22-2d5b-42d5-acde-e86d3341315c","type":"Annulus"},{"attributes":{},"id":"6a8b7363-f488-4d36-83ea-0fbeb0a6fb5b","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"ebfa30eb-83d8-4ae0-853b-8cdcb9aae393","subtype":"Figure","type":"Plot"},"ticker":{"id":"5ef45a44-0e75-4829-8483-dd9b9cbec3d1","type":"BasicTicker"}},"id":"51378e72-f15e-4d31-a003-69aa1c0e2616","type":"Grid"},{"attributes":{},"id":"ded8a3ba-2ebe-439f-9d51-22333dad5995","type":"BasicTickFormatter"},{"attributes":{},"id":"5c744801-ed6d-4680-8c37-ef779b46fb3a","type":"LinearScale"}],"root_ids":["ebfa30eb-83d8-4ae0-853b-8cdcb9aae393"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"3c18b8df-86b1-4291-a7a8-619b8d3f712f","elementid":"b1762173-abc5-4282-a5f3-7cc004f635cb","modelid":"ebfa30eb-83d8-4ae0-853b-8cdcb9aae393"}];
                
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
