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
      };var element = document.getElementById("0a11d7e9-6ea5-4513-85df-7a52bf64d3e1");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '0a11d7e9-6ea5-4513-85df-7a52bf64d3e1' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.11.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.11.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.11.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.11.min.js"];
    
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
                (function(root) {
                  function embed_document(root) {
                    var docs_json = '{"46fb2c94-1ad2-454f-8ed1-78f27fa01e76":{"roots":{"references":[{"attributes":{"dimension":1,"plot":{"id":"5e693c06-cb8d-4578-886a-238be4cbdc38","subtype":"Figure","type":"Plot"},"ticker":{"id":"9c131bb8-2ab3-495f-b624-ef7e3f2f6894","type":"BasicTicker"}},"id":"cb8a44a7-0d3d-431d-bc46-1713eba8e502","type":"Grid"},{"attributes":{"callback":null,"column_names":["x","y0","y1"],"data":{"x":[-20,-19,-18,-17,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"y0":[20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"y1":[400,361,324,289,256,225,196,169,144,121,100,81,64,49,36,25,16,9,4,1,0,1,4,9,16,25,36,49,64,81,100,121,144,169,196,225,256,289,324,361,400]}},"id":"b8460fe6-51ea-4dc7-8f26-1eb14d45e65d","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"5e693c06-cb8d-4578-886a-238be4cbdc38","subtype":"Figure","type":"Plot"},"ticker":{"id":"628a555d-de1f-4f48-96b4-06888fc99c89","type":"BasicTicker"}},"id":"651c5b54-be71-40f0-9d0b-a65d2990beb3","type":"Grid"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y0"}},"id":"037034b2-731a-4b32-8d85-794cbc994816","type":"Circle"},{"attributes":{"toolbar":{"id":"fa43b3b1-ec0e-40f6-a4ac-68cdeb35059c","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"1c6deedc-f91a-41bf-af5d-7b18ab5f6e07","type":"ToolbarBox"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"0e8d7a24-583d-40e1-8ece-962741d70036","type":"BoxAnnotation"},{"attributes":{},"id":"1b02f63a-2233-4b20-a50e-64b4a3ecdb34","type":"LinearScale"},{"attributes":{"fill_color":{"value":"firebrick"},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y0"}},"id":"136411f9-b744-435d-9855-52b578de7295","type":"Circle"},{"attributes":{"callback":null},"id":"b44f3396-902d-4e4d-9f26-458b6e94d0b2","type":"DataRange1d"},{"attributes":{"callback":null,"overlay":{"id":"0e8d7a24-583d-40e1-8ece-962741d70036","type":"BoxAnnotation"},"renderers":[{"id":"fe7b12cd-4b11-4529-9c74-0ba48caf65db","type":"GlyphRenderer"}]},"id":"68c42241-0019-4c18-98a7-1dfc0d585d3a","type":"BoxSelectTool"},{"attributes":{"formatter":{"id":"2e200458-f2a6-4fb0-8441-4987d68551b8","type":"BasicTickFormatter"},"plot":{"id":"5e693c06-cb8d-4578-886a-238be4cbdc38","subtype":"Figure","type":"Plot"},"ticker":{"id":"628a555d-de1f-4f48-96b4-06888fc99c89","type":"BasicTicker"}},"id":"bdcbb7d7-9a1e-485b-a5f9-3d2859fc364e","type":"LinearAxis"},{"attributes":{},"id":"9c131bb8-2ab3-495f-b624-ef7e3f2f6894","type":"BasicTicker"},{"attributes":{"source":{"id":"b8460fe6-51ea-4dc7-8f26-1eb14d45e65d","type":"ColumnDataSource"}},"id":"abe73506-24fa-4336-9a64-747600e720b0","type":"CDSView"},{"attributes":{"below":[{"id":"bdcbb7d7-9a1e-485b-a5f9-3d2859fc364e","type":"LinearAxis"}],"left":[{"id":"2016cc47-b8d2-415a-b02b-e7e17db4cb1b","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"bdcbb7d7-9a1e-485b-a5f9-3d2859fc364e","type":"LinearAxis"},{"id":"651c5b54-be71-40f0-9d0b-a65d2990beb3","type":"Grid"},{"id":"2016cc47-b8d2-415a-b02b-e7e17db4cb1b","type":"LinearAxis"},{"id":"cb8a44a7-0d3d-431d-bc46-1713eba8e502","type":"Grid"},{"id":"0e8d7a24-583d-40e1-8ece-962741d70036","type":"BoxAnnotation"},{"id":"96face5a-2d74-465d-a46e-6ade7496e1dd","type":"PolyAnnotation"},{"id":"fe7b12cd-4b11-4529-9c74-0ba48caf65db","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"d77a54ad-cd37-4e52-884a-660dcbbf7a4b","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"b44f3396-902d-4e4d-9f26-458b6e94d0b2","type":"DataRange1d"},"x_scale":{"id":"c69f7824-d6b6-493f-8c37-7deca046b483","type":"LinearScale"},"y_range":{"id":"8c137d09-926a-48b0-88ac-d9b40f8733e5","type":"DataRange1d"},"y_scale":{"id":"1b02f63a-2233-4b20-a50e-64b4a3ecdb34","type":"LinearScale"}},"id":"5e693c06-cb8d-4578-886a-238be4cbdc38","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"overlay":{"id":"96face5a-2d74-465d-a46e-6ade7496e1dd","type":"PolyAnnotation"}},"id":"a45452e3-f962-484d-bd28-0f243b376dae","type":"LassoSelectTool"},{"attributes":{"callback":null},"id":"2cfa7c80-490c-42b9-9003-e93affdbd2f1","type":"HoverTool"},{"attributes":{"booleans":[true,true,true,true,true,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,true,true,true,true,true]},"id":"600a40d5-cef2-49ca-8e2c-7d8801302bac","type":"BooleanFilter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"68c42241-0019-4c18-98a7-1dfc0d585d3a","type":"BoxSelectTool"},{"id":"a45452e3-f962-484d-bd28-0f243b376dae","type":"LassoSelectTool"},{"id":"2cfa7c80-490c-42b9-9003-e93affdbd2f1","type":"HoverTool"},{"id":"1112582f-2db7-44ea-b1dc-6f54d74b9920","type":"HelpTool"}]},"id":"d77a54ad-cd37-4e52-884a-660dcbbf7a4b","type":"Toolbar"},{"attributes":{},"id":"1112582f-2db7-44ea-b1dc-6f54d74b9920","type":"HelpTool"},{"attributes":{"data_source":{"id":"b8460fe6-51ea-4dc7-8f26-1eb14d45e65d","type":"ColumnDataSource"},"glyph":{"id":"037034b2-731a-4b32-8d85-794cbc994816","type":"Circle"},"hover_glyph":{"id":"136411f9-b744-435d-9855-52b578de7295","type":"Circle"},"muted_glyph":null,"nonselection_glyph":{"id":"e649de61-7cb4-4ced-bf52-8d6870b3cf44","type":"Circle"},"selection_glyph":null,"view":{"id":"abe73506-24fa-4336-9a64-747600e720b0","type":"CDSView"}},"id":"fe7b12cd-4b11-4529-9c74-0ba48caf65db","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"a737ba48-6229-4dc2-b968-0b5c87aa5265","type":"PolyAnnotation"},{"attributes":{"callback":null},"id":"b620cf93-eac5-43b8-835a-37d99211e5c0","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y1"}},"id":"2729e838-a69e-4685-98d8-83851f06bf80","type":"Circle"},{"attributes":{},"id":"c69f7824-d6b6-493f-8c37-7deca046b483","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"31b4d423-c27b-48b3-9b50-9caa0b1388f1","type":"BoxSelectTool"},{"id":"1aeb4ac6-bbc7-465c-b5e1-928aefa4c3d1","type":"LassoSelectTool"},{"id":"38bcb79d-13f9-4bbd-b4ac-b7322527e559","type":"HoverTool"},{"id":"695c4d2e-2b3d-4d8c-9cbd-4c5022e5ccbf","type":"HelpTool"}]},"id":"d133861c-be2e-4573-8655-425d2e63e75e","type":"Toolbar"},{"attributes":{"callback":null},"id":"353aeb32-09fb-422a-94ac-8548f7a2bf87","type":"DataRange1d"},{"attributes":{},"id":"2e200458-f2a6-4fb0-8441-4987d68551b8","type":"BasicTickFormatter"},{"attributes":{},"id":"be5991e1-c018-4947-8acd-83b9be9fb56f","type":"LinearScale"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y1"}},"id":"fd8b9c23-8443-43ea-a1cf-58a8e778d5d5","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"2c7d2159-5c60-45ed-9eb8-b71138ec255f","type":"BoxAnnotation"},{"attributes":{},"id":"628a555d-de1f-4f48-96b4-06888fc99c89","type":"BasicTicker"},{"attributes":{},"id":"7a380dc1-240c-49a6-8e3c-f3d37907d82e","type":"LinearScale"},{"attributes":{},"id":"cb6a24ae-beae-4d31-b46b-1216e396274c","type":"BasicTicker"},{"attributes":{"plot":{"id":"c2188dc9-9bd0-4215-9a5d-091c9e910aa5","subtype":"Figure","type":"Plot"},"ticker":{"id":"cb6a24ae-beae-4d31-b46b-1216e396274c","type":"BasicTicker"}},"id":"5ec58599-2d3c-4d6d-af97-5d83bb4690a5","type":"Grid"},{"attributes":{},"id":"b6fb0ac0-b866-47ce-af28-81920363c448","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"firebrick"},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y1"}},"id":"3e38cbf4-7886-468b-bfac-84de238b085f","type":"Circle"},{"attributes":{"filters":[{"id":"600a40d5-cef2-49ca-8e2c-7d8801302bac","type":"BooleanFilter"}],"source":{"id":"b8460fe6-51ea-4dc7-8f26-1eb14d45e65d","type":"ColumnDataSource"}},"id":"bbef30b8-236d-4931-8b18-4b7868eec8eb","type":"CDSView"},{"attributes":{},"id":"c17bd810-76de-44ce-a1b5-e7d81f0a8efb","type":"BasicTickFormatter"},{"attributes":{"callback":null,"overlay":{"id":"2c7d2159-5c60-45ed-9eb8-b71138ec255f","type":"BoxAnnotation"},"renderers":[{"id":"413f5c3a-6522-457b-b16e-bd8e67a22f88","type":"GlyphRenderer"}]},"id":"31b4d423-c27b-48b3-9b50-9caa0b1388f1","type":"BoxSelectTool"},{"attributes":{"callback":null,"overlay":{"id":"a737ba48-6229-4dc2-b968-0b5c87aa5265","type":"PolyAnnotation"}},"id":"1aeb4ac6-bbc7-465c-b5e1-928aefa4c3d1","type":"LassoSelectTool"},{"attributes":{"below":[{"id":"27717709-9e42-4655-9d67-99909ed14d62","type":"LinearAxis"}],"left":[{"id":"c577deaf-d08f-4d45-bfe0-c7aa6db96df3","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"27717709-9e42-4655-9d67-99909ed14d62","type":"LinearAxis"},{"id":"5ec58599-2d3c-4d6d-af97-5d83bb4690a5","type":"Grid"},{"id":"c577deaf-d08f-4d45-bfe0-c7aa6db96df3","type":"LinearAxis"},{"id":"ffb0eb83-f7a5-4c13-afd3-c112147790ea","type":"Grid"},{"id":"2c7d2159-5c60-45ed-9eb8-b71138ec255f","type":"BoxAnnotation"},{"id":"a737ba48-6229-4dc2-b968-0b5c87aa5265","type":"PolyAnnotation"},{"id":"413f5c3a-6522-457b-b16e-bd8e67a22f88","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"d133861c-be2e-4573-8655-425d2e63e75e","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"353aeb32-09fb-422a-94ac-8548f7a2bf87","type":"DataRange1d"},"x_scale":{"id":"be5991e1-c018-4947-8acd-83b9be9fb56f","type":"LinearScale"},"y_range":{"id":"b620cf93-eac5-43b8-835a-37d99211e5c0","type":"DataRange1d"},"y_scale":{"id":"7a380dc1-240c-49a6-8e3c-f3d37907d82e","type":"LinearScale"}},"id":"c2188dc9-9bd0-4215-9a5d-091c9e910aa5","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"695c4d2e-2b3d-4d8c-9cbd-4c5022e5ccbf","type":"HelpTool"},{"attributes":{"callback":null},"id":"38bcb79d-13f9-4bbd-b4ac-b7322527e559","type":"HoverTool"},{"attributes":{"dimension":1,"plot":{"id":"c2188dc9-9bd0-4215-9a5d-091c9e910aa5","subtype":"Figure","type":"Plot"},"ticker":{"id":"f807cea1-13ba-4406-a31a-c18fa91dac54","type":"BasicTicker"}},"id":"ffb0eb83-f7a5-4c13-afd3-c112147790ea","type":"Grid"},{"attributes":{},"id":"f807cea1-13ba-4406-a31a-c18fa91dac54","type":"BasicTicker"},{"attributes":{"formatter":{"id":"b6fb0ac0-b866-47ce-af28-81920363c448","type":"BasicTickFormatter"},"plot":{"id":"c2188dc9-9bd0-4215-9a5d-091c9e910aa5","subtype":"Figure","type":"Plot"},"ticker":{"id":"f807cea1-13ba-4406-a31a-c18fa91dac54","type":"BasicTicker"}},"id":"c577deaf-d08f-4d45-bfe0-c7aa6db96df3","type":"LinearAxis"},{"attributes":{"children":[{"id":"1c6deedc-f91a-41bf-af5d-7b18ab5f6e07","type":"ToolbarBox"},{"id":"59ca18c9-ee2c-4dca-a98a-67937a0b0c48","type":"Column"}]},"id":"8b3b6ee3-60e3-4d9a-8563-61dfedb0b208","type":"Column"},{"attributes":{"formatter":{"id":"c17bd810-76de-44ce-a1b5-e7d81f0a8efb","type":"BasicTickFormatter"},"plot":{"id":"c2188dc9-9bd0-4215-9a5d-091c9e910aa5","subtype":"Figure","type":"Plot"},"ticker":{"id":"cb6a24ae-beae-4d31-b46b-1216e396274c","type":"BasicTicker"}},"id":"27717709-9e42-4655-9d67-99909ed14d62","type":"LinearAxis"},{"attributes":{},"id":"a6905d57-050a-4afe-9a48-43bfe9b17797","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"8c137d09-926a-48b0-88ac-d9b40f8733e5","type":"DataRange1d"},{"attributes":{"formatter":{"id":"a6905d57-050a-4afe-9a48-43bfe9b17797","type":"BasicTickFormatter"},"plot":{"id":"5e693c06-cb8d-4578-886a-238be4cbdc38","subtype":"Figure","type":"Plot"},"ticker":{"id":"9c131bb8-2ab3-495f-b624-ef7e3f2f6894","type":"BasicTicker"}},"id":"2016cc47-b8d2-415a-b02b-e7e17db4cb1b","type":"LinearAxis"},{"attributes":{"data_source":{"id":"b8460fe6-51ea-4dc7-8f26-1eb14d45e65d","type":"ColumnDataSource"},"glyph":{"id":"fd8b9c23-8443-43ea-a1cf-58a8e778d5d5","type":"Circle"},"hover_glyph":{"id":"3e38cbf4-7886-468b-bfac-84de238b085f","type":"Circle"},"muted_glyph":null,"nonselection_glyph":{"id":"2729e838-a69e-4685-98d8-83851f06bf80","type":"Circle"},"selection_glyph":null,"view":{"id":"bbef30b8-236d-4931-8b18-4b7868eec8eb","type":"CDSView"}},"id":"413f5c3a-6522-457b-b16e-bd8e67a22f88","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"96face5a-2d74-465d-a46e-6ade7496e1dd","type":"PolyAnnotation"},{"attributes":{"children":[{"id":"5e693c06-cb8d-4578-886a-238be4cbdc38","subtype":"Figure","type":"Plot"},{"id":"c2188dc9-9bd0-4215-9a5d-091c9e910aa5","subtype":"Figure","type":"Plot"}]},"id":"dd14fdf4-6b24-4975-b05d-674fc6f26f20","type":"Row"},{"attributes":{"tools":[{"id":"68c42241-0019-4c18-98a7-1dfc0d585d3a","type":"BoxSelectTool"},{"id":"a45452e3-f962-484d-bd28-0f243b376dae","type":"LassoSelectTool"},{"id":"2cfa7c80-490c-42b9-9003-e93affdbd2f1","type":"HoverTool"},{"id":"1112582f-2db7-44ea-b1dc-6f54d74b9920","type":"HelpTool"},{"id":"31b4d423-c27b-48b3-9b50-9caa0b1388f1","type":"BoxSelectTool"},{"id":"1aeb4ac6-bbc7-465c-b5e1-928aefa4c3d1","type":"LassoSelectTool"},{"id":"38bcb79d-13f9-4bbd-b4ac-b7322527e559","type":"HoverTool"},{"id":"695c4d2e-2b3d-4d8c-9cbd-4c5022e5ccbf","type":"HelpTool"}]},"id":"fa43b3b1-ec0e-40f6-a4ac-68cdeb35059c","type":"ProxyToolbar"},{"attributes":{"children":[{"id":"dd14fdf4-6b24-4975-b05d-674fc6f26f20","type":"Row"}]},"id":"59ca18c9-ee2c-4dca-a98a-67937a0b0c48","type":"Column"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y0"}},"id":"e649de61-7cb4-4ced-bf52-8d6870b3cf44","type":"Circle"}],"root_ids":["8b3b6ee3-60e3-4d9a-8563-61dfedb0b208"]},"title":"Bokeh Application","version":"0.12.11"}}';
                    var render_items = [{"docid":"46fb2c94-1ad2-454f-8ed1-78f27fa01e76","elementid":"0a11d7e9-6ea5-4513-85df-7a52bf64d3e1","modelid":"8b3b6ee3-60e3-4d9a-8563-61dfedb0b208"}];
                    root.Bokeh.embed.embed_items(docs_json, render_items);
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        embed_document(root);
                        clearInterval(timer);
                      }
                      attempts++;
                      if (attempts > 100) {
                        console.log("Bokeh: ERROR: Unable to embed document because BokehJS library is missing")
                        clearInterval(timer);
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.11.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.11.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.11.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.11.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.11.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.11.min.css");
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