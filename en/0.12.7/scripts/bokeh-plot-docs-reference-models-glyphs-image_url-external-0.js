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
      };var element = document.getElementById("c28ef6f2-3569-43a4-a7c2-6bb2bf7feefc");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c28ef6f2-3569-43a4-a7c2-6bb2bf7feefc' but no matching script tag was found. ")
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
                var docs_json = {"a2c8915a-33f1-4d98-ac4c-2449cd328158":{"roots":{"references":[{"attributes":{"callback":null,"end":200,"start":-100},"id":"f3028a76-a8c4-4058-afce-39e174fc5529","type":"Range1d"},{"attributes":{"below":[{"id":"7da41da6-3a87-4164-99e3-677758f97d1c","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"1a9f2c4a-858a-4531-8360-d9a89f48e1b8","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"7964bae5-90e7-4660-bb0b-27ff0501428a","type":"GlyphRenderer"},{"id":"d60d599a-4167-4303-97e2-b87c86f1dc36","type":"GlyphRenderer"},{"id":"5c410376-6c7a-4a7d-885f-d3f79ce82040","type":"GlyphRenderer"},{"id":"7da41da6-3a87-4164-99e3-677758f97d1c","type":"LinearAxis"},{"id":"1a9f2c4a-858a-4531-8360-d9a89f48e1b8","type":"LinearAxis"},{"id":"2ba11570-9492-4698-8a18-387b305ae4b1","type":"Grid"},{"id":"9c8cf0ff-d0fb-4b81-8d5c-d29797785b75","type":"Grid"}],"title":null,"toolbar":{"id":"189e90b0-c84d-41fe-8ac0-318cd7d10541","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"f3028a76-a8c4-4058-afce-39e174fc5529","type":"Range1d"},"x_scale":{"id":"628e3de5-3022-4809-9a50-a383fdb25427","type":"LinearScale"},"y_range":{"id":"6b892252-c0b2-443e-a874-b2b7f4ed23ff","type":"Range1d"},"y_scale":{"id":"c60be6bd-089a-4604-a331-a216ad2fbf8b","type":"LinearScale"}},"id":"ae0ac48a-4e82-45d9-a9c0-cc96fad1834e","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"189e90b0-c84d-41fe-8ac0-318cd7d10541","type":"Toolbar"},{"attributes":{"callback":null,"end":200,"start":-100},"id":"6b892252-c0b2-443e-a874-b2b7f4ed23ff","type":"Range1d"},{"attributes":{"h":{"units":"data","value":20},"url":{"field":"url"},"w":{"units":"data","value":20},"x":{"field":"x2"},"y":{"field":"y2"}},"id":"0f6219a5-b6a4-44be-96ea-a68601a59795","type":"ImageURL"},{"attributes":{"source":{"id":"107600c0-a80e-4453-b0e7-a9eb52b136da","type":"ColumnDataSource"}},"id":"849937be-373c-4433-8be1-4faaa2ec01d8","type":"CDSView"},{"attributes":{"source":{"id":"107600c0-a80e-4453-b0e7-a9eb52b136da","type":"ColumnDataSource"}},"id":"d77db2c3-3bdb-4216-9957-a36ac0238e29","type":"CDSView"},{"attributes":{"anchor":"bottom_right","url":{"value":"https://bokeh.pydata.org/en/latest/_static/images/logo.png"},"x":{"value":200},"y":{"value":-100}},"id":"0525cb51-ed30-43ab-b738-150cee3bfee5","type":"ImageURL"},{"attributes":{},"id":"d85af8b5-f078-4739-8745-915732307e7f","type":"BasicTicker"},{"attributes":{"data_source":{"id":"107600c0-a80e-4453-b0e7-a9eb52b136da","type":"ColumnDataSource"},"glyph":{"id":"0f6219a5-b6a4-44be-96ea-a68601a59795","type":"ImageURL"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"849937be-373c-4433-8be1-4faaa2ec01d8","type":"CDSView"}},"id":"d60d599a-4167-4303-97e2-b87c86f1dc36","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"ae0ac48a-4e82-45d9-a9c0-cc96fad1834e","type":"Plot"},"ticker":{"id":"9afe9642-412f-46ef-b440-d630bdd28366","type":"BasicTicker"}},"id":"9c8cf0ff-d0fb-4b81-8d5c-d29797785b75","type":"Grid"},{"attributes":{"formatter":{"id":"e7afc4ba-a383-42dc-ac14-3a04ff19df92","type":"BasicTickFormatter"},"plot":{"id":"ae0ac48a-4e82-45d9-a9c0-cc96fad1834e","type":"Plot"},"ticker":{"id":"d85af8b5-f078-4739-8745-915732307e7f","type":"BasicTicker"}},"id":"7da41da6-3a87-4164-99e3-677758f97d1c","type":"LinearAxis"},{"attributes":{"formatter":{"id":"d0d8c59c-4c00-4c09-8c3c-bcc783929a65","type":"BasicTickFormatter"},"plot":{"id":"ae0ac48a-4e82-45d9-a9c0-cc96fad1834e","type":"Plot"},"ticker":{"id":"9afe9642-412f-46ef-b440-d630bdd28366","type":"BasicTicker"}},"id":"1a9f2c4a-858a-4531-8360-d9a89f48e1b8","type":"LinearAxis"},{"attributes":{"plot":{"id":"ae0ac48a-4e82-45d9-a9c0-cc96fad1834e","type":"Plot"},"ticker":{"id":"d85af8b5-f078-4739-8745-915732307e7f","type":"BasicTicker"}},"id":"2ba11570-9492-4698-8a18-387b305ae4b1","type":"Grid"},{"attributes":{},"id":"e7afc4ba-a383-42dc-ac14-3a04ff19df92","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"107600c0-a80e-4453-b0e7-a9eb52b136da","type":"ColumnDataSource"},"glyph":{"id":"20d5d1cd-595d-4878-a0a4-bda92bb95b51","type":"ImageURL"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"d77db2c3-3bdb-4216-9957-a36ac0238e29","type":"CDSView"}},"id":"7964bae5-90e7-4660-bb0b-27ff0501428a","type":"GlyphRenderer"},{"attributes":{},"id":"d0d8c59c-4c00-4c09-8c3c-bcc783929a65","type":"BasicTickFormatter"},{"attributes":{"anchor":"center","h":{"field":"h1","units":"data"},"url":{"field":"url"},"w":{"field":"w1","units":"data"},"x":{"field":"x1"},"y":{"field":"y1"}},"id":"20d5d1cd-595d-4878-a0a4-bda92bb95b51","type":"ImageURL"},{"attributes":{},"id":"9afe9642-412f-46ef-b440-d630bdd28366","type":"BasicTicker"},{"attributes":{"source":{"id":"107600c0-a80e-4453-b0e7-a9eb52b136da","type":"ColumnDataSource"}},"id":"3993bc96-952c-4f13-9746-5a6f0b23b6ae","type":"CDSView"},{"attributes":{},"id":"628e3de5-3022-4809-9a50-a383fdb25427","type":"LinearScale"},{"attributes":{},"id":"c60be6bd-089a-4604-a331-a216ad2fbf8b","type":"LinearScale"},{"attributes":{"callback":null,"column_names":["url","x1","y1","w1","h1","x2","y2"],"data":{"h1":{"__ndarray__":"AAAAAAAAJEAAAAAAAAA0QAAAAAAAAD5AAAAAAAAAREAAAAAAAABJQA==","dtype":"float64","shape":[5]},"url":["https://bokeh.pydata.org/en/latest/_static/images/logo.png","https://bokeh.pydata.org/en/latest/_static/images/logo.png","https://bokeh.pydata.org/en/latest/_static/images/logo.png","https://bokeh.pydata.org/en/latest/_static/images/logo.png","https://bokeh.pydata.org/en/latest/_static/images/logo.png"],"w1":{"__ndarray__":"AAAAAAAAJEAAAAAAAAA0QAAAAAAAAD5AAAAAAAAAREAAAAAAAABJQA==","dtype":"float64","shape":[5]},"x1":{"__ndarray__":"AAAAAAAAAAAAAAAAAMBCQAAAAAAAwFJAAAAAAAAgXEAAAAAAAMBiQA==","dtype":"float64","shape":[5]},"x2":{"__ndarray__":"AAAAAAAAScAAAAAAAAAAAAAAAAAAAElAAAAAAAAAWUAAAAAAAMBiQA==","dtype":"float64","shape":[5]},"y1":{"__ndarray__":"AAAAAAAAAAAAAAAAAMBCQAAAAAAAwFJAAAAAAAAgXEAAAAAAAMBiQA==","dtype":"float64","shape":[5]},"y2":{"__ndarray__":"AAAAAAAAAAAAAAAAAABJQAAAAAAAAFlAAAAAAADAYkAAAAAAAABpQA==","dtype":"float64","shape":[5]}}},"id":"107600c0-a80e-4453-b0e7-a9eb52b136da","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"107600c0-a80e-4453-b0e7-a9eb52b136da","type":"ColumnDataSource"},"glyph":{"id":"0525cb51-ed30-43ab-b738-150cee3bfee5","type":"ImageURL"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"3993bc96-952c-4f13-9746-5a6f0b23b6ae","type":"CDSView"}},"id":"5c410376-6c7a-4a7d-885f-d3f79ce82040","type":"GlyphRenderer"}],"root_ids":["ae0ac48a-4e82-45d9-a9c0-cc96fad1834e"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"a2c8915a-33f1-4d98-ac4c-2449cd328158","elementid":"c28ef6f2-3569-43a4-a7c2-6bb2bf7feefc","modelid":"ae0ac48a-4e82-45d9-a9c0-cc96fad1834e"}];
                
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
