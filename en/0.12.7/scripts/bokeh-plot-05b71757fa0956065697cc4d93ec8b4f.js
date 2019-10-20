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
      };var element = document.getElementById("6b140047-47f8-4ccc-bc3d-1d1c51aead05");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '6b140047-47f8-4ccc-bc3d-1d1c51aead05' but no matching script tag was found. ")
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
                var docs_json = {"70a4807a-09a4-4c94-a419-0f9a1c927c83":{"roots":{"references":[{"attributes":{"callback":null,"end":9},"id":"cc646d47-87f1-4292-afcc-a398e1d2bdc6","type":"Range1d"},{"attributes":{"dimension":1,"plot":{"id":"497dbee4-89f1-4519-b63c-06ab38ebe56e","subtype":"Figure","type":"Plot"},"ticker":{"id":"8ef3cdea-c52c-4721-9a68-97fa18105547","type":"BasicTicker"}},"id":"94d2dd52-bfdc-4a58-a2af-ca87b63668b5","type":"Grid"},{"attributes":{},"id":"82a62a94-33f4-4e5e-b688-7a7a2f519d61","type":"LinearScale"},{"attributes":{"fill_color":{"field":"color"},"line_color":{"field":"color"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"3520b88b-55b4-4be8-8431-660d1f8553df","type":"VBar"},{"attributes":{"formatter":{"id":"eb85fd17-7ef3-49c4-beec-f99156f7a7fd","type":"CategoricalTickFormatter"},"plot":{"id":"497dbee4-89f1-4519-b63c-06ab38ebe56e","subtype":"Figure","type":"Plot"},"ticker":{"id":"2b25b26f-a8f4-4bc7-8852-34a0359f7db2","type":"CategoricalTicker"}},"id":"14fe05ed-192e-43d8-b300-67d3d7cdd81e","type":"CategoricalAxis"},{"attributes":{"data_source":{"id":"32892298-692b-4b9b-b231-b2dace65fd25","type":"ColumnDataSource"},"glyph":{"id":"3520b88b-55b4-4be8-8431-660d1f8553df","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"ed15d00a-de7f-4076-a635-4304e3bc2237","type":"VBar"},"selection_glyph":null,"view":{"id":"0e42e6d0-7cbe-47a5-853e-cb47ab43b055","type":"CDSView"}},"id":"eaddb761-7d8c-417b-8b2e-2063b983f656","type":"GlyphRenderer"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"497dbee4-89f1-4519-b63c-06ab38ebe56e","subtype":"Figure","type":"Plot"},"ticker":{"id":"2b25b26f-a8f4-4bc7-8852-34a0359f7db2","type":"CategoricalTicker"}},"id":"3e82efc1-ec4f-4a45-8bf1-9911c61584d8","type":"Grid"},{"attributes":{"source":{"id":"32892298-692b-4b9b-b231-b2dace65fd25","type":"ColumnDataSource"}},"id":"0e42e6d0-7cbe-47a5-853e-cb47ab43b055","type":"CDSView"},{"attributes":{},"id":"2b25b26f-a8f4-4bc7-8852-34a0359f7db2","type":"CategoricalTicker"},{"attributes":{},"id":"eb85fd17-7ef3-49c4-beec-f99156f7a7fd","type":"CategoricalTickFormatter"},{"attributes":{},"id":"8ef3cdea-c52c-4721-9a68-97fa18105547","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"ed15d00a-de7f-4076-a635-4304e3bc2237","type":"VBar"},{"attributes":{},"id":"ebd9ba77-a9cd-441e-9370-d0886d846efe","type":"BasicTickFormatter"},{"attributes":{"items":[{"id":"7d3d48b6-7c72-4d62-a456-bb5ba745fbff","type":"LegendItem"}],"location":"top_center","orientation":"horizontal","plot":{"id":"497dbee4-89f1-4519-b63c-06ab38ebe56e","subtype":"Figure","type":"Plot"}},"id":"d6f53937-235d-45e4-b688-c177e4b625a6","type":"Legend"},{"attributes":{"callback":null,"column_names":["fruits","counts","color"],"data":{"color":["#3288bd","#99d594","#e6f598","#fee08b","#fc8d59","#d53e4f"],"counts":[5,3,4,2,4,6],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]}},"id":"32892298-692b-4b9b-b231-b2dace65fd25","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"14fe05ed-192e-43d8-b300-67d3d7cdd81e","type":"CategoricalAxis"}],"left":[{"id":"a0c832fb-5bcc-4522-8e5c-99016b0207bd","type":"LinearAxis"}],"plot_height":250,"renderers":[{"id":"14fe05ed-192e-43d8-b300-67d3d7cdd81e","type":"CategoricalAxis"},{"id":"3e82efc1-ec4f-4a45-8bf1-9911c61584d8","type":"Grid"},{"id":"a0c832fb-5bcc-4522-8e5c-99016b0207bd","type":"LinearAxis"},{"id":"94d2dd52-bfdc-4a58-a2af-ca87b63668b5","type":"Grid"},{"id":"d6f53937-235d-45e4-b688-c177e4b625a6","type":"Legend"},{"id":"eaddb761-7d8c-417b-8b2e-2063b983f656","type":"GlyphRenderer"}],"title":{"id":"c9bc7c12-dd1f-48f0-93f1-3d61dfc459ba","type":"Title"},"toolbar":{"id":"e2c51afa-39c5-4c2f-84d5-4614b7a02e2e","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"c81a62ed-9e9e-4ffd-9aa6-532863d1adab","type":"FactorRange"},"x_scale":{"id":"8b0da8ae-a34a-4b63-a990-e98e14a1befc","type":"CategoricalScale"},"y_range":{"id":"cc646d47-87f1-4292-afcc-a398e1d2bdc6","type":"Range1d"},"y_scale":{"id":"82a62a94-33f4-4e5e-b688-7a7a2f519d61","type":"LinearScale"}},"id":"497dbee4-89f1-4519-b63c-06ab38ebe56e","subtype":"Figure","type":"Plot"},{"attributes":{"plot":null,"text":"Fruit Counts"},"id":"c9bc7c12-dd1f-48f0-93f1-3d61dfc459ba","type":"Title"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"id":"c81a62ed-9e9e-4ffd-9aa6-532863d1adab","type":"FactorRange"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"e2c51afa-39c5-4c2f-84d5-4614b7a02e2e","type":"Toolbar"},{"attributes":{"label":{"field":"fruits"},"renderers":[{"id":"eaddb761-7d8c-417b-8b2e-2063b983f656","type":"GlyphRenderer"}]},"id":"7d3d48b6-7c72-4d62-a456-bb5ba745fbff","type":"LegendItem"},{"attributes":{"formatter":{"id":"ebd9ba77-a9cd-441e-9370-d0886d846efe","type":"BasicTickFormatter"},"plot":{"id":"497dbee4-89f1-4519-b63c-06ab38ebe56e","subtype":"Figure","type":"Plot"},"ticker":{"id":"8ef3cdea-c52c-4721-9a68-97fa18105547","type":"BasicTicker"}},"id":"a0c832fb-5bcc-4522-8e5c-99016b0207bd","type":"LinearAxis"},{"attributes":{},"id":"8b0da8ae-a34a-4b63-a990-e98e14a1befc","type":"CategoricalScale"}],"root_ids":["497dbee4-89f1-4519-b63c-06ab38ebe56e"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"70a4807a-09a4-4c94-a419-0f9a1c927c83","elementid":"6b140047-47f8-4ccc-bc3d-1d1c51aead05","modelid":"497dbee4-89f1-4519-b63c-06ab38ebe56e"}];
                
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
