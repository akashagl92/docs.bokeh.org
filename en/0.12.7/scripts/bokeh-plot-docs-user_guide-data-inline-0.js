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
      };var element = document.getElementById("36e082b8-02a8-4587-a48e-feb00ea16008");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '36e082b8-02a8-4587-a48e-feb00ea16008' but no matching script tag was found. ")
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
                var docs_json = {"27df4449-7317-4211-9df8-d9af22704445":{"roots":{"references":[{"attributes":{"source":{"id":"182385ab-1678-4d82-9206-1cc20cc5ee9a","type":"ColumnDataSource"}},"id":"33ec8081-9435-4305-a693-97891e68b4f0","type":"CDSView"},{"attributes":{"callback":null},"id":"f7e0c106-7f04-4476-981b-5007a83bdd23","type":"DataRange1d"},{"attributes":{"formatter":{"id":"1d112bdd-9cec-4d6d-bb2d-d2dc6c1dfd28","type":"BasicTickFormatter"},"plot":{"id":"b872dd73-3f90-4605-9632-98f64eb83cc7","subtype":"Figure","type":"Plot"},"ticker":{"id":"5898c3f1-f050-46da-a45d-63561ef21be5","type":"BasicTicker"}},"id":"d4b28f3a-b333-4df5-8e85-087e63df30ed","type":"LinearAxis"},{"attributes":{"below":[{"id":"d4b28f3a-b333-4df5-8e85-087e63df30ed","type":"LinearAxis"}],"left":[{"id":"8ceba9ba-9978-4204-8115-01629a70ad1d","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"d4b28f3a-b333-4df5-8e85-087e63df30ed","type":"LinearAxis"},{"id":"2b076fb5-8cca-4665-9b8e-04a2c6a0a057","type":"Grid"},{"id":"8ceba9ba-9978-4204-8115-01629a70ad1d","type":"LinearAxis"},{"id":"22729327-956d-4c42-ad0a-646f4225b039","type":"Grid"},{"id":"f006f9d8-609a-459d-923d-9b9d49464189","type":"BoxAnnotation"},{"id":"8f990f87-3e04-4d5d-8da0-58202571c47e","type":"GlyphRenderer"}],"title":{"id":"458cd50a-08ab-4f74-8f5a-33b26167207b","type":"Title"},"toolbar":{"id":"cf2aac73-04e7-44be-9e35-df184b8674fb","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"ebcce9ee-3eb0-46fb-aefb-3abf4941060c","type":"DataRange1d"},"x_scale":{"id":"2131618c-d14e-43d6-9748-93e92673ab7a","type":"LinearScale"},"y_range":{"id":"b69bafdf-ea10-424d-b7e9-ee4a15cf81d6","type":"DataRange1d"},"y_scale":{"id":"952e9004-b6f0-4191-b017-ea8658488292","type":"LinearScale"}},"id":"b872dd73-3f90-4605-9632-98f64eb83cc7","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"15df72e5-94e7-4c3b-92fb-dd1e2d2304a6","type":"BoxAnnotation"},{"attributes":{},"id":"c9b5b1eb-6279-40f4-8df1-0899f296ff5f","type":"ResetTool"},{"attributes":{"data_source":{"id":"182385ab-1678-4d82-9206-1cc20cc5ee9a","type":"ColumnDataSource"},"glyph":{"id":"84e34c2a-8969-42b7-8c4b-3f484a3da9e8","type":"Circle"},"hover_glyph":{"id":"452e8b8e-cc22-4246-a578-6e369d0161c2","type":"Circle"},"muted_glyph":null,"nonselection_glyph":{"id":"a0d1b6d0-261f-4a7f-89ef-ebb0e0c45b58","type":"Circle"},"selection_glyph":null,"view":{"id":"375f17b5-b511-411d-82f6-041bdad6c9d1","type":"CDSView"}},"id":"8f990f87-3e04-4d5d-8da0-58202571c47e","type":"GlyphRenderer"},{"attributes":{"filters":[{"id":"5d92af10-8735-4a91-9ce0-40d12ab36804","type":"IndexFilter"}],"source":{"id":"182385ab-1678-4d82-9206-1cc20cc5ee9a","type":"ColumnDataSource"}},"id":"375f17b5-b511-411d-82f6-041bdad6c9d1","type":"CDSView"},{"attributes":{"callback":null,"overlay":{"id":"15df72e5-94e7-4c3b-92fb-dd1e2d2304a6","type":"BoxAnnotation"},"renderers":[{"id":"310edfd7-f3e1-433d-ae64-a68e316d4cda","type":"GlyphRenderer"}]},"id":"18e4a336-dbce-44ed-a725-5ba4ae23103a","type":"BoxSelectTool"},{"attributes":{},"id":"2131618c-d14e-43d6-9748-93e92673ab7a","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"b872dd73-3f90-4605-9632-98f64eb83cc7","subtype":"Figure","type":"Plot"},"ticker":{"id":"f41f328d-962e-4686-b2e7-0d3245f13c08","type":"BasicTicker"}},"id":"22729327-956d-4c42-ad0a-646f4225b039","type":"Grid"},{"attributes":{"plot":{"id":"99e30719-f268-41df-a39c-e1c113c34a90","subtype":"Figure","type":"Plot"},"ticker":{"id":"b35be3af-2111-40be-a510-4b4cd4699a54","type":"BasicTicker"}},"id":"06bfdd65-46e5-4600-8220-8018fbf8143c","type":"Grid"},{"attributes":{"callback":null},"id":"b69bafdf-ea10-424d-b7e9-ee4a15cf81d6","type":"DataRange1d"},{"attributes":{"callback":null},"id":"ebcce9ee-3eb0-46fb-aefb-3abf4941060c","type":"DataRange1d"},{"attributes":{},"id":"0214a95b-a154-4775-bb23-7d98cee3a9aa","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"b872dd73-3f90-4605-9632-98f64eb83cc7","subtype":"Figure","type":"Plot"},"ticker":{"id":"5898c3f1-f050-46da-a45d-63561ef21be5","type":"BasicTicker"}},"id":"2b076fb5-8cca-4665-9b8e-04a2c6a0a057","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"99e30719-f268-41df-a39c-e1c113c34a90","subtype":"Figure","type":"Plot"},"ticker":{"id":"908fa2e3-a763-4f99-a82e-39d81192abc1","type":"BasicTicker"}},"id":"6700c468-2ed7-40cc-aa40-f23249a28078","type":"Grid"},{"attributes":{"formatter":{"id":"096d29f4-054e-4f5f-8d43-d6aadd590346","type":"BasicTickFormatter"},"plot":{"id":"99e30719-f268-41df-a39c-e1c113c34a90","subtype":"Figure","type":"Plot"},"ticker":{"id":"908fa2e3-a763-4f99-a82e-39d81192abc1","type":"BasicTicker"}},"id":"7f30904d-145e-4a96-9da4-6f7647865a07","type":"LinearAxis"},{"attributes":{"data_source":{"id":"182385ab-1678-4d82-9206-1cc20cc5ee9a","type":"ColumnDataSource"},"glyph":{"id":"892b1cd4-743b-4f6c-a64e-a0e41442ba4f","type":"Circle"},"hover_glyph":{"id":"163b58f9-e232-4650-aaaa-fa990e7b2de8","type":"Circle"},"muted_glyph":null,"nonselection_glyph":{"id":"a21ed78b-7405-4f75-a3f2-952632387dc2","type":"Circle"},"selection_glyph":null,"view":{"id":"33ec8081-9435-4305-a693-97891e68b4f0","type":"CDSView"}},"id":"310edfd7-f3e1-433d-ae64-a68e316d4cda","type":"GlyphRenderer"},{"attributes":{},"id":"952e9004-b6f0-4191-b017-ea8658488292","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"a0d1b6d0-261f-4a7f-89ef-ebb0e0c45b58","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[1,2,3,4,5]}},"id":"182385ab-1678-4d82-9206-1cc20cc5ee9a","type":"ColumnDataSource"},{"attributes":{},"id":"0a798cd7-044f-466c-9afb-a2032dabcecc","type":"LinearScale"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"163b58f9-e232-4650-aaaa-fa990e7b2de8","type":"Circle"},{"attributes":{"formatter":{"id":"0214a95b-a154-4775-bb23-7d98cee3a9aa","type":"BasicTickFormatter"},"plot":{"id":"99e30719-f268-41df-a39c-e1c113c34a90","subtype":"Figure","type":"Plot"},"ticker":{"id":"b35be3af-2111-40be-a510-4b4cd4699a54","type":"BasicTicker"}},"id":"13324145-b21d-4943-aa4b-ceb046495b9a","type":"LinearAxis"},{"attributes":{"below":[{"id":"13324145-b21d-4943-aa4b-ceb046495b9a","type":"LinearAxis"}],"left":[{"id":"7f30904d-145e-4a96-9da4-6f7647865a07","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"13324145-b21d-4943-aa4b-ceb046495b9a","type":"LinearAxis"},{"id":"06bfdd65-46e5-4600-8220-8018fbf8143c","type":"Grid"},{"id":"7f30904d-145e-4a96-9da4-6f7647865a07","type":"LinearAxis"},{"id":"6700c468-2ed7-40cc-aa40-f23249a28078","type":"Grid"},{"id":"15df72e5-94e7-4c3b-92fb-dd1e2d2304a6","type":"BoxAnnotation"},{"id":"310edfd7-f3e1-433d-ae64-a68e316d4cda","type":"GlyphRenderer"}],"title":{"id":"2cc9dc41-34d2-499e-8676-d92f87978872","type":"Title"},"toolbar":{"id":"a9b868d2-c404-4c8d-b545-c6527eda75b1","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"8b97b530-4a4b-4b7b-b193-c38fd302c688","type":"DataRange1d"},"x_scale":{"id":"dce42fdd-3324-4720-8997-6bb71187a9a6","type":"LinearScale"},"y_range":{"id":"f7e0c106-7f04-4476-981b-5007a83bdd23","type":"DataRange1d"},"y_scale":{"id":"0a798cd7-044f-466c-9afb-a2032dabcecc","type":"LinearScale"}},"id":"99e30719-f268-41df-a39c-e1c113c34a90","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"dce42fdd-3324-4720-8997-6bb71187a9a6","type":"LinearScale"},{"attributes":{"plot":null,"text":""},"id":"2cc9dc41-34d2-499e-8676-d92f87978872","type":"Title"},{"attributes":{"children":[{"id":"e7a6a995-1b0a-4d96-9cc2-af31af7eaace","type":"ToolbarBox"},{"id":"9abe29f7-6651-4643-a057-d535abedf305","type":"Column"}]},"id":"008ebcdb-e3c8-47ab-b3a3-bf2d738640b7","type":"Column"},{"attributes":{"formatter":{"id":"cb88a1dd-d66a-47e8-9b46-e35a859a93ca","type":"BasicTickFormatter"},"plot":{"id":"b872dd73-3f90-4605-9632-98f64eb83cc7","subtype":"Figure","type":"Plot"},"ticker":{"id":"f41f328d-962e-4686-b2e7-0d3245f13c08","type":"BasicTicker"}},"id":"8ceba9ba-9978-4204-8115-01629a70ad1d","type":"LinearAxis"},{"attributes":{},"id":"b35be3af-2111-40be-a510-4b4cd4699a54","type":"BasicTicker"},{"attributes":{},"id":"908fa2e3-a763-4f99-a82e-39d81192abc1","type":"BasicTicker"},{"attributes":{"children":[{"id":"99e30719-f268-41df-a39c-e1c113c34a90","subtype":"Figure","type":"Plot"},{"id":"b872dd73-3f90-4605-9632-98f64eb83cc7","subtype":"Figure","type":"Plot"}]},"id":"4cdf6a86-4a95-4486-8686-dc4f1c136179","type":"Row"},{"attributes":{},"id":"5898c3f1-f050-46da-a45d-63561ef21be5","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"84e34c2a-8969-42b7-8c4b-3f484a3da9e8","type":"Circle"},{"attributes":{"plot":null,"text":""},"id":"458cd50a-08ab-4f74-8f5a-33b26167207b","type":"Title"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"f006f9d8-609a-459d-923d-9b9d49464189","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"a21ed78b-7405-4f75-a3f2-952632387dc2","type":"Circle"},{"attributes":{},"id":"cb88a1dd-d66a-47e8-9b46-e35a859a93ca","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"452e8b8e-cc22-4246-a578-6e369d0161c2","type":"Circle"},{"attributes":{"callback":null},"id":"22e79a1e-d09b-420b-a0b1-41a164c3f736","type":"HoverTool"},{"attributes":{"children":[{"id":"4cdf6a86-4a95-4486-8686-dc4f1c136179","type":"Row"}]},"id":"9abe29f7-6651-4643-a057-d535abedf305","type":"Column"},{"attributes":{"callback":null},"id":"8b97b530-4a4b-4b7b-b193-c38fd302c688","type":"DataRange1d"},{"attributes":{"indices":[0,2,4]},"id":"5d92af10-8735-4a91-9ce0-40d12ab36804","type":"IndexFilter"},{"attributes":{},"id":"1d112bdd-9cec-4d6d-bb2d-d2dc6c1dfd28","type":"BasicTickFormatter"},{"attributes":{"sizing_mode":"scale_width","toolbar_location":"above","tools":[{"id":"18e4a336-dbce-44ed-a725-5ba4ae23103a","type":"BoxSelectTool"},{"id":"32d840c8-3197-4bd5-96f3-c1a00b2ab265","type":"HoverTool"},{"id":"c9b5b1eb-6279-40f4-8df1-0899f296ff5f","type":"ResetTool"},{"id":"9fa398ec-a376-4236-9e4a-a97048f6a52f","type":"BoxSelectTool"},{"id":"22e79a1e-d09b-420b-a0b1-41a164c3f736","type":"HoverTool"},{"id":"19b55e98-3453-4365-838c-3df3f4fba673","type":"ResetTool"}]},"id":"e7a6a995-1b0a-4d96-9cc2-af31af7eaace","type":"ToolbarBox"},{"attributes":{},"id":"19b55e98-3453-4365-838c-3df3f4fba673","type":"ResetTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"18e4a336-dbce-44ed-a725-5ba4ae23103a","type":"BoxSelectTool"},{"id":"32d840c8-3197-4bd5-96f3-c1a00b2ab265","type":"HoverTool"},{"id":"c9b5b1eb-6279-40f4-8df1-0899f296ff5f","type":"ResetTool"}]},"id":"a9b868d2-c404-4c8d-b545-c6527eda75b1","type":"Toolbar"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"9fa398ec-a376-4236-9e4a-a97048f6a52f","type":"BoxSelectTool"},{"id":"22e79a1e-d09b-420b-a0b1-41a164c3f736","type":"HoverTool"},{"id":"19b55e98-3453-4365-838c-3df3f4fba673","type":"ResetTool"}]},"id":"cf2aac73-04e7-44be-9e35-df184b8674fb","type":"Toolbar"},{"attributes":{"callback":null,"overlay":{"id":"f006f9d8-609a-459d-923d-9b9d49464189","type":"BoxAnnotation"},"renderers":[{"id":"8f990f87-3e04-4d5d-8da0-58202571c47e","type":"GlyphRenderer"}]},"id":"9fa398ec-a376-4236-9e4a-a97048f6a52f","type":"BoxSelectTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"892b1cd4-743b-4f6c-a64e-a0e41442ba4f","type":"Circle"},{"attributes":{},"id":"f41f328d-962e-4686-b2e7-0d3245f13c08","type":"BasicTicker"},{"attributes":{"callback":null},"id":"32d840c8-3197-4bd5-96f3-c1a00b2ab265","type":"HoverTool"},{"attributes":{},"id":"096d29f4-054e-4f5f-8d43-d6aadd590346","type":"BasicTickFormatter"}],"root_ids":["008ebcdb-e3c8-47ab-b3a3-bf2d738640b7"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"27df4449-7317-4211-9df8-d9af22704445","elementid":"36e082b8-02a8-4587-a48e-feb00ea16008","modelid":"008ebcdb-e3c8-47ab-b3a3-bf2d738640b7"}];
                
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
