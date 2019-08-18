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
      };var element = document.getElementById("5ddcc3f9-1fd1-45e4-aa70-d1e3c0c65aba");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '5ddcc3f9-1fd1-45e4-aa70-d1e3c0c65aba' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.12.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.12.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.12.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.12.min.js"];
    
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
                    
                  var docs_json = '{"aa8d478b-04e0-4a4d-845d-0ce02a191433":{"roots":{"references":[{"attributes":{},"id":"053f43c9-b5cf-4e7c-825e-2c4299821add","type":"LinearScale"},{"attributes":{},"id":"dadd87e0-ee13-43ec-89a1-0fc00025f5dc","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"d78a9f0f-6c5a-4710-be9d-ca4393f4a685","type":"CategoricalAxis"}],"left":[{"id":"690ec3ab-4780-4461-b449-07d74a397fe4","type":"LinearAxis"}],"plot_height":250,"renderers":[{"id":"d78a9f0f-6c5a-4710-be9d-ca4393f4a685","type":"CategoricalAxis"},{"id":"1116e422-a0b4-435a-97de-22f127e0b53c","type":"Grid"},{"id":"690ec3ab-4780-4461-b449-07d74a397fe4","type":"LinearAxis"},{"id":"916e4301-7c26-48d6-ae59-75062068d36a","type":"Grid"},{"id":"273add7b-88c8-4535-a144-f7ead635b0e2","type":"GlyphRenderer"}],"title":{"id":"97e078ac-e9a2-48a1-bcbb-49e4b7b3a453","type":"Title"},"toolbar":{"id":"ef1753b2-edd9-4e72-958f-279829e80b75","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"af374231-c2df-45ce-9bcd-645b3d74f5ed","type":"FactorRange"},"x_scale":{"id":"d0cad5aa-1e46-4b91-b418-3b8512986293","type":"CategoricalScale"},"y_range":{"id":"2e9b77ee-02d0-4466-b827-1fc45c6c3845","type":"DataRange1d"},"y_scale":{"id":"053f43c9-b5cf-4e7c-825e-2c4299821add","type":"LinearScale"}},"id":"66f2108c-7544-43ec-ae58-f2c262cacc67","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"ef1753b2-edd9-4e72-958f-279829e80b75","type":"Toolbar"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"id":"af374231-c2df-45ce-9bcd-645b3d74f5ed","type":"FactorRange"},{"attributes":{"formatter":{"id":"dadd87e0-ee13-43ec-89a1-0fc00025f5dc","type":"BasicTickFormatter"},"plot":{"id":"66f2108c-7544-43ec-ae58-f2c262cacc67","subtype":"Figure","type":"Plot"},"ticker":{"id":"f12d04f8-2a80-4c01-b769-3ad2145238e0","type":"BasicTicker"}},"id":"690ec3ab-4780-4461-b449-07d74a397fe4","type":"LinearAxis"},{"attributes":{},"id":"d0cad5aa-1e46-4b91-b418-3b8512986293","type":"CategoricalScale"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.9},"x":{"field":"x"}},"id":"acb9f360-7975-4f10-b429-5624b5b5e875","type":"VBar"},{"attributes":{"formatter":{"id":"1d351833-0a99-4821-a309-0bc1dba363bd","type":"CategoricalTickFormatter"},"plot":{"id":"66f2108c-7544-43ec-ae58-f2c262cacc67","subtype":"Figure","type":"Plot"},"ticker":{"id":"2800f9de-2314-4973-a4ec-6821e23a5a8d","type":"CategoricalTicker"}},"id":"d78a9f0f-6c5a-4710-be9d-ca4393f4a685","type":"CategoricalAxis"},{"attributes":{"plot":null,"text":"Fruit Counts"},"id":"97e078ac-e9a2-48a1-bcbb-49e4b7b3a453","type":"Title"},{"attributes":{"callback":null,"start":0},"id":"2e9b77ee-02d0-4466-b827-1fc45c6c3845","type":"DataRange1d"},{"attributes":{"source":{"id":"5dae65c0-7fa4-48fe-812b-b75a041dcf2c","type":"ColumnDataSource"}},"id":"03e9fc65-09d0-454d-8f5d-d660cda44db5","type":"CDSView"},{"attributes":{"dimension":1,"plot":{"id":"66f2108c-7544-43ec-ae58-f2c262cacc67","subtype":"Figure","type":"Plot"},"ticker":{"id":"f12d04f8-2a80-4c01-b769-3ad2145238e0","type":"BasicTicker"}},"id":"916e4301-7c26-48d6-ae59-75062068d36a","type":"Grid"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"66f2108c-7544-43ec-ae58-f2c262cacc67","subtype":"Figure","type":"Plot"},"ticker":{"id":"2800f9de-2314-4973-a4ec-6821e23a5a8d","type":"CategoricalTicker"}},"id":"1116e422-a0b4-435a-97de-22f127e0b53c","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.9},"x":{"field":"x"}},"id":"aff530c8-a307-4951-aa0b-051fedc5005c","type":"VBar"},{"attributes":{"callback":null,"column_names":["x","top"],"data":{"top":[5,3,4,2,4,6],"x":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]}},"id":"5dae65c0-7fa4-48fe-812b-b75a041dcf2c","type":"ColumnDataSource"},{"attributes":{},"id":"f12d04f8-2a80-4c01-b769-3ad2145238e0","type":"BasicTicker"},{"attributes":{},"id":"1d351833-0a99-4821-a309-0bc1dba363bd","type":"CategoricalTickFormatter"},{"attributes":{},"id":"2800f9de-2314-4973-a4ec-6821e23a5a8d","type":"CategoricalTicker"},{"attributes":{"data_source":{"id":"5dae65c0-7fa4-48fe-812b-b75a041dcf2c","type":"ColumnDataSource"},"glyph":{"id":"acb9f360-7975-4f10-b429-5624b5b5e875","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"aff530c8-a307-4951-aa0b-051fedc5005c","type":"VBar"},"selection_glyph":null,"view":{"id":"03e9fc65-09d0-454d-8f5d-d660cda44db5","type":"CDSView"}},"id":"273add7b-88c8-4535-a144-f7ead635b0e2","type":"GlyphRenderer"}],"root_ids":["66f2108c-7544-43ec-ae58-f2c262cacc67"]},"title":"Bokeh Application","version":"0.12.12"}}';
                  var render_items = [{"docid":"aa8d478b-04e0-4a4d-845d-0ce02a191433","elementid":"5ddcc3f9-1fd1-45e4-aa70-d1e3c0c65aba","modelid":"66f2108c-7544-43ec-ae58-f2c262cacc67"}];
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
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing")
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.12.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.12.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.12.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.12.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.12.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.12.min.css");
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