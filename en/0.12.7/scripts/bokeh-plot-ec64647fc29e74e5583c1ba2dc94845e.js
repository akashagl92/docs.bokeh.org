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
      };var element = document.getElementById("b4b36264-5078-4930-a23e-62d60e079b05");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'b4b36264-5078-4930-a23e-62d60e079b05' but no matching script tag was found. ")
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
                var docs_json = {"63982e3a-91e4-45f3-a945-29be1429a7c8":{"roots":{"references":[{"attributes":{"callback":null,"overlay":{"id":"1d6fa4fa-7c56-43ce-aa55-2bbcc896eb98","type":"BoxAnnotation"},"renderers":[{"id":"3af283fc-f766-4d7d-a30d-bcd506df67db","type":"GlyphRenderer"}]},"id":"6aeac95c-2e4b-4551-a278-a6232bb1cc8f","type":"BoxSelectTool"},{"attributes":{"children":[{"id":"73d1e9fc-eda6-4d3a-942f-db8d81c9eac5","type":"ToolbarBox"},{"id":"9417d094-50c4-46d1-a870-fa0e44299c62","type":"Column"}]},"id":"aa1e14f6-f9db-4fb2-b5cc-d8e93982ee57","type":"Column"},{"attributes":{"data_source":{"id":"ff1ef72d-c84f-48c3-ac61-d156c87e76aa","type":"ColumnDataSource"},"glyph":{"id":"38eb6395-18c3-402f-a036-ddf552602cb6","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"bbbe6c63-cb40-4908-a922-f04dd7d7da3d","type":"Circle"},"selection_glyph":null,"view":{"id":"da840ecd-b669-4041-b5dc-dfe3a644e232","type":"CDSView"}},"id":"fe587a4f-05e4-493d-909c-03b0b955b771","type":"GlyphRenderer"},{"attributes":{},"id":"82ffd185-d1f5-4fe0-9ad7-43ddf14f2b2f","type":"LinearScale"},{"attributes":{},"id":"4229d5d2-44fe-4575-b225-b33ff5bc2494","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y1"}},"id":"38eb6395-18c3-402f-a036-ddf552602cb6","type":"Circle"},{"attributes":{},"id":"c0f85051-aec6-4528-946d-4a6620f87dda","type":"BasicTickFormatter"},{"attributes":{"callback":null,"overlay":{"id":"5fd6d893-5025-4630-a457-72e2665e9301","type":"PolyAnnotation"}},"id":"afa37735-3631-4c30-9e09-a4681db34cdd","type":"LassoSelectTool"},{"attributes":{"formatter":{"id":"e14caeab-8de9-41c3-a117-a9318922941a","type":"BasicTickFormatter"},"plot":{"id":"772859ff-af15-4282-89f9-5d50c207f746","subtype":"Figure","type":"Plot"},"ticker":{"id":"0941f735-5095-414e-93d2-7bc620b9daae","type":"BasicTicker"}},"id":"95310761-5609-486a-ab7f-593f28d4a5de","type":"LinearAxis"},{"attributes":{"callback":null},"id":"730ec3bd-cb67-43d3-bdf1-defae9c46ac6","type":"DataRange1d"},{"attributes":{"plot":{"id":"2dcad988-1fc2-4b20-ac64-080818b604bc","subtype":"Figure","type":"Plot"},"ticker":{"id":"8ed41831-7a3c-4989-b57a-71f4823072da","type":"BasicTicker"}},"id":"702b27fa-8998-4b21-94e2-d3772c88184e","type":"Grid"},{"attributes":{"below":[{"id":"28ebedd2-f647-4d51-b33c-7b4c2754de10","type":"LinearAxis"}],"left":[{"id":"ca3324f4-0a71-480e-a4e5-9e82813def99","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"28ebedd2-f647-4d51-b33c-7b4c2754de10","type":"LinearAxis"},{"id":"702b27fa-8998-4b21-94e2-d3772c88184e","type":"Grid"},{"id":"ca3324f4-0a71-480e-a4e5-9e82813def99","type":"LinearAxis"},{"id":"eeca08ff-16d3-42f0-bbcc-5bd2eca82c77","type":"Grid"},{"id":"1d6fa4fa-7c56-43ce-aa55-2bbcc896eb98","type":"BoxAnnotation"},{"id":"acea180b-4cb6-4d84-a6c3-fc0755a12959","type":"PolyAnnotation"},{"id":"3af283fc-f766-4d7d-a30d-bcd506df67db","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"0913fa7c-7ab9-49e0-8534-b205c4e8fe52","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"463e518d-5763-4097-9242-84854f77cfc6","type":"DataRange1d"},"x_scale":{"id":"61d49e17-cd19-418f-a646-521ad6ae5c25","type":"LinearScale"},"y_range":{"id":"78db21a9-19ac-4728-8333-60a877634e73","type":"DataRange1d"},"y_scale":{"id":"91df80ca-1ed8-46bc-871f-80e1fb8504f2","type":"LinearScale"}},"id":"2dcad988-1fc2-4b20-ac64-080818b604bc","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"ff1ef72d-c84f-48c3-ac61-d156c87e76aa","type":"ColumnDataSource"}},"id":"da840ecd-b669-4041-b5dc-dfe3a644e232","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y1"}},"id":"bbbe6c63-cb40-4908-a922-f04dd7d7da3d","type":"Circle"},{"attributes":{},"id":"0941f735-5095-414e-93d2-7bc620b9daae","type":"BasicTicker"},{"attributes":{},"id":"1257b52c-f6b5-4b80-9004-f0b7cff98a04","type":"BasicTickFormatter"},{"attributes":{},"id":"77a2c528-455b-4fb2-b35b-ca4b61c1d009","type":"BasicTicker"},{"attributes":{},"id":"30461631-da04-4369-9399-a0b40397d6f3","type":"HelpTool"},{"attributes":{"callback":null,"overlay":{"id":"acea180b-4cb6-4d84-a6c3-fc0755a12959","type":"PolyAnnotation"}},"id":"2c785263-178d-40c2-a07d-5833f4cfae78","type":"LassoSelectTool"},{"attributes":{"dimension":1,"plot":{"id":"2dcad988-1fc2-4b20-ac64-080818b604bc","subtype":"Figure","type":"Plot"},"ticker":{"id":"6d95806e-1a63-4255-b039-7bc846d26e13","type":"BasicTicker"}},"id":"eeca08ff-16d3-42f0-bbcc-5bd2eca82c77","type":"Grid"},{"attributes":{},"id":"6d95806e-1a63-4255-b039-7bc846d26e13","type":"BasicTicker"},{"attributes":{"sizing_mode":"scale_width","toolbar_location":"above","tools":[{"id":"6aeac95c-2e4b-4551-a278-a6232bb1cc8f","type":"BoxSelectTool"},{"id":"2c785263-178d-40c2-a07d-5833f4cfae78","type":"LassoSelectTool"},{"id":"3507f158-bf45-4fa4-8d84-4c10a6ca9ddd","type":"HelpTool"},{"id":"2fa54fc2-1325-421d-92e2-36cd2cc7f97e","type":"BoxSelectTool"},{"id":"afa37735-3631-4c30-9e09-a4681db34cdd","type":"LassoSelectTool"},{"id":"30461631-da04-4369-9399-a0b40397d6f3","type":"HelpTool"}]},"id":"73d1e9fc-eda6-4d3a-942f-db8d81c9eac5","type":"ToolbarBox"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y0"}},"id":"28b4fd5c-fe4e-42e9-b74b-e750b388a3d4","type":"Circle"},{"attributes":{"formatter":{"id":"1257b52c-f6b5-4b80-9004-f0b7cff98a04","type":"BasicTickFormatter"},"plot":{"id":"772859ff-af15-4282-89f9-5d50c207f746","subtype":"Figure","type":"Plot"},"ticker":{"id":"77a2c528-455b-4fb2-b35b-ca4b61c1d009","type":"BasicTicker"}},"id":"18fc44b2-d743-4a6b-9b98-2446cb0bab7a","type":"LinearAxis"},{"attributes":{},"id":"91df80ca-1ed8-46bc-871f-80e1fb8504f2","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"772859ff-af15-4282-89f9-5d50c207f746","subtype":"Figure","type":"Plot"},"ticker":{"id":"77a2c528-455b-4fb2-b35b-ca4b61c1d009","type":"BasicTicker"}},"id":"39c07e30-5b05-45e2-9ecf-5f3c0c90d69e","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"1d6fa4fa-7c56-43ce-aa55-2bbcc896eb98","type":"BoxAnnotation"},{"attributes":{"children":[{"id":"0513c0a2-22e4-4129-b46a-1b575852e75e","type":"Row"}]},"id":"9417d094-50c4-46d1-a870-fa0e44299c62","type":"Column"},{"attributes":{},"id":"3507f158-bf45-4fa4-8d84-4c10a6ca9ddd","type":"HelpTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"b9415982-d858-40f0-bfe3-ad210e69c5d2","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"78db21a9-19ac-4728-8333-60a877634e73","type":"DataRange1d"},{"attributes":{"callback":null},"id":"163406a1-8eb8-4dd9-8357-3753e2817901","type":"DataRange1d"},{"attributes":{"callback":null},"id":"463e518d-5763-4097-9242-84854f77cfc6","type":"DataRange1d"},{"attributes":{"formatter":{"id":"4229d5d2-44fe-4575-b225-b33ff5bc2494","type":"BasicTickFormatter"},"plot":{"id":"2dcad988-1fc2-4b20-ac64-080818b604bc","subtype":"Figure","type":"Plot"},"ticker":{"id":"8ed41831-7a3c-4989-b57a-71f4823072da","type":"BasicTicker"}},"id":"28ebedd2-f647-4d51-b33c-7b4c2754de10","type":"LinearAxis"},{"attributes":{"callback":null,"overlay":{"id":"b9415982-d858-40f0-bfe3-ad210e69c5d2","type":"BoxAnnotation"},"renderers":[{"id":"fe587a4f-05e4-493d-909c-03b0b955b771","type":"GlyphRenderer"}]},"id":"2fa54fc2-1325-421d-92e2-36cd2cc7f97e","type":"BoxSelectTool"},{"attributes":{"formatter":{"id":"c0f85051-aec6-4528-946d-4a6620f87dda","type":"BasicTickFormatter"},"plot":{"id":"2dcad988-1fc2-4b20-ac64-080818b604bc","subtype":"Figure","type":"Plot"},"ticker":{"id":"6d95806e-1a63-4255-b039-7bc846d26e13","type":"BasicTicker"}},"id":"ca3324f4-0a71-480e-a4e5-9e82813def99","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"2fa54fc2-1325-421d-92e2-36cd2cc7f97e","type":"BoxSelectTool"},{"id":"afa37735-3631-4c30-9e09-a4681db34cdd","type":"LassoSelectTool"},{"id":"30461631-da04-4369-9399-a0b40397d6f3","type":"HelpTool"}]},"id":"05d79d19-c997-405d-a76c-794a6903bff6","type":"Toolbar"},{"attributes":{},"id":"8ed41831-7a3c-4989-b57a-71f4823072da","type":"BasicTicker"},{"attributes":{},"id":"e14caeab-8de9-41c3-a117-a9318922941a","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"6aeac95c-2e4b-4551-a278-a6232bb1cc8f","type":"BoxSelectTool"},{"id":"2c785263-178d-40c2-a07d-5833f4cfae78","type":"LassoSelectTool"},{"id":"3507f158-bf45-4fa4-8d84-4c10a6ca9ddd","type":"HelpTool"}]},"id":"0913fa7c-7ab9-49e0-8534-b205c4e8fe52","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"5fd6d893-5025-4630-a457-72e2665e9301","type":"PolyAnnotation"},{"attributes":{"children":[{"id":"2dcad988-1fc2-4b20-ac64-080818b604bc","subtype":"Figure","type":"Plot"},{"id":"772859ff-af15-4282-89f9-5d50c207f746","subtype":"Figure","type":"Plot"}]},"id":"0513c0a2-22e4-4129-b46a-1b575852e75e","type":"Row"},{"attributes":{},"id":"61d49e17-cd19-418f-a646-521ad6ae5c25","type":"LinearScale"},{"attributes":{"data_source":{"id":"ff1ef72d-c84f-48c3-ac61-d156c87e76aa","type":"ColumnDataSource"},"glyph":{"id":"32d5127e-5d67-471a-bf14-648beec6ae49","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"28b4fd5c-fe4e-42e9-b74b-e750b388a3d4","type":"Circle"},"selection_glyph":null,"view":{"id":"9c5d9131-27c6-4eae-a428-c0a2bd286aa1","type":"CDSView"}},"id":"3af283fc-f766-4d7d-a30d-bcd506df67db","type":"GlyphRenderer"},{"attributes":{"source":{"id":"ff1ef72d-c84f-48c3-ac61-d156c87e76aa","type":"ColumnDataSource"}},"id":"9c5d9131-27c6-4eae-a428-c0a2bd286aa1","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"acea180b-4cb6-4d84-a6c3-fc0755a12959","type":"PolyAnnotation"},{"attributes":{"plot":{"id":"772859ff-af15-4282-89f9-5d50c207f746","subtype":"Figure","type":"Plot"},"ticker":{"id":"0941f735-5095-414e-93d2-7bc620b9daae","type":"BasicTicker"}},"id":"03ee5cef-2584-4b51-9e8c-8cef5042d862","type":"Grid"},{"attributes":{},"id":"7aa65ee9-c786-413c-b485-a8b7c3bbec23","type":"LinearScale"},{"attributes":{"callback":null,"column_names":["x","y0","y1"],"data":{"x":[-20,-19,-18,-17,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"y0":[20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"y1":[400,361,324,289,256,225,196,169,144,121,100,81,64,49,36,25,16,9,4,1,0,1,4,9,16,25,36,49,64,81,100,121,144,169,196,225,256,289,324,361,400]}},"id":"ff1ef72d-c84f-48c3-ac61-d156c87e76aa","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y0"}},"id":"32d5127e-5d67-471a-bf14-648beec6ae49","type":"Circle"},{"attributes":{"below":[{"id":"95310761-5609-486a-ab7f-593f28d4a5de","type":"LinearAxis"}],"left":[{"id":"18fc44b2-d743-4a6b-9b98-2446cb0bab7a","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"95310761-5609-486a-ab7f-593f28d4a5de","type":"LinearAxis"},{"id":"03ee5cef-2584-4b51-9e8c-8cef5042d862","type":"Grid"},{"id":"18fc44b2-d743-4a6b-9b98-2446cb0bab7a","type":"LinearAxis"},{"id":"39c07e30-5b05-45e2-9ecf-5f3c0c90d69e","type":"Grid"},{"id":"b9415982-d858-40f0-bfe3-ad210e69c5d2","type":"BoxAnnotation"},{"id":"5fd6d893-5025-4630-a457-72e2665e9301","type":"PolyAnnotation"},{"id":"fe587a4f-05e4-493d-909c-03b0b955b771","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"05d79d19-c997-405d-a76c-794a6903bff6","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"163406a1-8eb8-4dd9-8357-3753e2817901","type":"DataRange1d"},"x_scale":{"id":"82ffd185-d1f5-4fe0-9ad7-43ddf14f2b2f","type":"LinearScale"},"y_range":{"id":"730ec3bd-cb67-43d3-bdf1-defae9c46ac6","type":"DataRange1d"},"y_scale":{"id":"7aa65ee9-c786-413c-b485-a8b7c3bbec23","type":"LinearScale"}},"id":"772859ff-af15-4282-89f9-5d50c207f746","subtype":"Figure","type":"Plot"}],"root_ids":["aa1e14f6-f9db-4fb2-b5cc-d8e93982ee57"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"63982e3a-91e4-45f3-a945-29be1429a7c8","elementid":"b4b36264-5078-4930-a23e-62d60e079b05","modelid":"aa1e14f6-f9db-4fb2-b5cc-d8e93982ee57"}];
                
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
