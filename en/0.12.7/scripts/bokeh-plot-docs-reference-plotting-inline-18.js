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
      };var element = document.getElementById("f90d1bbf-0b73-484f-89da-945d8e10a306");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'f90d1bbf-0b73-484f-89da-945d8e10a306' but no matching script tag was found. ")
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
                var docs_json = {"cb69d7cf-f498-4feb-a4f6-7f5d0e1292f6":{"roots":{"references":[{"attributes":{"overlay":{"id":"38639485-b0ac-4201-99bd-9983aa77bbea","type":"BoxAnnotation"}},"id":"001ebcca-5873-4a22-8fce-2b5796c02181","type":"BoxZoomTool"},{"attributes":{"fill_color":{"value":"#CAB2D6"},"height":{"units":"screen","value":20},"line_color":{"value":"#CAB2D6"},"width":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"a98f4737-cea2-4e81-b6a7-b924ee58f76c","type":"Rect"},{"attributes":{},"id":"7e3a25ec-7403-45e9-82a4-18ab31c861fe","type":"SaveTool"},{"attributes":{"formatter":{"id":"086c6215-f052-449c-aa1d-0bdcbf1c510f","type":"BasicTickFormatter"},"plot":{"id":"c7249cbd-4ac8-40d2-9166-c943cb49f942","subtype":"Figure","type":"Plot"},"ticker":{"id":"115ffd71-55f4-4dc7-8a07-bfc44e002ad6","type":"BasicTicker"}},"id":"0c1f654e-7a21-48ae-8297-b9d848a4a2d8","type":"LinearAxis"},{"attributes":{},"id":"ae872e9a-2d77-4d15-90ab-032fae94ee4a","type":"ResetTool"},{"attributes":{"callback":null},"id":"d4fe3348-e6ea-4635-be48-b9a13ad49ca2","type":"DataRange1d"},{"attributes":{},"id":"e470748a-c749-4b55-bf66-a1073ba08995","type":"HelpTool"},{"attributes":{},"id":"69569526-08a5-46b0-88b3-9907351bb8b0","type":"LinearScale"},{"attributes":{},"id":"2b7dc776-afc2-4d75-9660-f2db0a1cc22e","type":"LinearScale"},{"attributes":{"plot":{"id":"c7249cbd-4ac8-40d2-9166-c943cb49f942","subtype":"Figure","type":"Plot"},"ticker":{"id":"115ffd71-55f4-4dc7-8a07-bfc44e002ad6","type":"BasicTicker"}},"id":"8372a11d-7e80-4f24-b760-e3569a917a8c","type":"Grid"},{"attributes":{"plot":null,"text":""},"id":"91dbcbff-aea7-4187-a69a-a542de25eb39","type":"Title"},{"attributes":{"formatter":{"id":"74a0ecc5-f773-412a-baa5-bcb5f2c8d6a5","type":"BasicTickFormatter"},"plot":{"id":"c7249cbd-4ac8-40d2-9166-c943cb49f942","subtype":"Figure","type":"Plot"},"ticker":{"id":"7443058a-56c3-41f3-a730-4815e684b552","type":"BasicTicker"}},"id":"7a30cd63-a8ca-4744-a67f-61455f18798e","type":"LinearAxis"},{"attributes":{},"id":"7443058a-56c3-41f3-a730-4815e684b552","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"screen","value":20},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"6bee63be-51e0-487e-a4fb-1ab73d53ceab","type":"Rect"},{"attributes":{"dimension":1,"plot":{"id":"c7249cbd-4ac8-40d2-9166-c943cb49f942","subtype":"Figure","type":"Plot"},"ticker":{"id":"7443058a-56c3-41f3-a730-4815e684b552","type":"BasicTicker"}},"id":"094fc335-a4f8-492c-a9a9-9faa9b503352","type":"Grid"},{"attributes":{},"id":"086c6215-f052-449c-aa1d-0bdcbf1c510f","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"4a78855b-b167-4cdb-a6b8-c80103d0ad04","type":"ColumnDataSource"},"glyph":{"id":"a98f4737-cea2-4e81-b6a7-b924ee58f76c","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6bee63be-51e0-487e-a4fb-1ab73d53ceab","type":"Rect"},"selection_glyph":null,"view":{"id":"d83c20c8-0591-4c39-80df-44c1364d0cae","type":"CDSView"}},"id":"d4ad6317-e9e7-4e7f-8a13-8678525a6b67","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"4a78855b-b167-4cdb-a6b8-c80103d0ad04","type":"ColumnDataSource"},{"attributes":{"source":{"id":"4a78855b-b167-4cdb-a6b8-c80103d0ad04","type":"ColumnDataSource"}},"id":"d83c20c8-0591-4c39-80df-44c1364d0cae","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"38639485-b0ac-4201-99bd-9983aa77bbea","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"0c1f654e-7a21-48ae-8297-b9d848a4a2d8","type":"LinearAxis"}],"left":[{"id":"7a30cd63-a8ca-4744-a67f-61455f18798e","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"0c1f654e-7a21-48ae-8297-b9d848a4a2d8","type":"LinearAxis"},{"id":"8372a11d-7e80-4f24-b760-e3569a917a8c","type":"Grid"},{"id":"7a30cd63-a8ca-4744-a67f-61455f18798e","type":"LinearAxis"},{"id":"094fc335-a4f8-492c-a9a9-9faa9b503352","type":"Grid"},{"id":"38639485-b0ac-4201-99bd-9983aa77bbea","type":"BoxAnnotation"},{"id":"d4ad6317-e9e7-4e7f-8a13-8678525a6b67","type":"GlyphRenderer"}],"title":{"id":"91dbcbff-aea7-4187-a69a-a542de25eb39","type":"Title"},"toolbar":{"id":"37ed7a97-e219-40dc-b599-74ec6bf3f208","type":"Toolbar"},"x_range":{"id":"36901ec4-bb04-4fe0-aa4c-7f7269b42fba","type":"DataRange1d"},"x_scale":{"id":"69569526-08a5-46b0-88b3-9907351bb8b0","type":"LinearScale"},"y_range":{"id":"d4fe3348-e6ea-4635-be48-b9a13ad49ca2","type":"DataRange1d"},"y_scale":{"id":"2b7dc776-afc2-4d75-9660-f2db0a1cc22e","type":"LinearScale"}},"id":"c7249cbd-4ac8-40d2-9166-c943cb49f942","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"462dc236-39f6-44eb-8126-599e34e1b23d","type":"PanTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"462dc236-39f6-44eb-8126-599e34e1b23d","type":"PanTool"},{"id":"4f792cd4-914e-4d40-a772-22e2197d2152","type":"WheelZoomTool"},{"id":"001ebcca-5873-4a22-8fce-2b5796c02181","type":"BoxZoomTool"},{"id":"7e3a25ec-7403-45e9-82a4-18ab31c861fe","type":"SaveTool"},{"id":"ae872e9a-2d77-4d15-90ab-032fae94ee4a","type":"ResetTool"},{"id":"e470748a-c749-4b55-bf66-a1073ba08995","type":"HelpTool"}]},"id":"37ed7a97-e219-40dc-b599-74ec6bf3f208","type":"Toolbar"},{"attributes":{},"id":"74a0ecc5-f773-412a-baa5-bcb5f2c8d6a5","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"36901ec4-bb04-4fe0-aa4c-7f7269b42fba","type":"DataRange1d"},{"attributes":{},"id":"4f792cd4-914e-4d40-a772-22e2197d2152","type":"WheelZoomTool"},{"attributes":{},"id":"115ffd71-55f4-4dc7-8a07-bfc44e002ad6","type":"BasicTicker"}],"root_ids":["c7249cbd-4ac8-40d2-9166-c943cb49f942"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"cb69d7cf-f498-4feb-a4f6-7f5d0e1292f6","elementid":"f90d1bbf-0b73-484f-89da-945d8e10a306","modelid":"c7249cbd-4ac8-40d2-9166-c943cb49f942"}];
                
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
