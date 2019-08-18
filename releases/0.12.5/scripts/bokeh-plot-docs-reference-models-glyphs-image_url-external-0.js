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
      };var element = document.getElementById("f31bc9c5-4cba-4c0e-b66e-1a85df0d4d36");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'f31bc9c5-4cba-4c0e-b66e-1a85df0d4d36' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.js"];
    
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
                var docs_json = {"6c1d1acc-1a57-4b53-a58b-6ffffd150970":{"roots":{"references":[{"attributes":{"anchor":"bottom_right","url":{"value":"http://bokeh.pydata.org/en/latest/_static/images/logo.png"},"x":{"value":200},"y":{"value":-100}},"id":"8faad1cd-320b-418e-9461-c496c7040e52","type":"ImageURL"},{"attributes":{"callback":null,"end":200,"start":-100},"id":"fdbcb45b-f569-4280-8132-c340cc359527","type":"Range1d"},{"attributes":{"dimension":1,"plot":{"id":"6159b165-4901-461e-8e1f-20ea5142d706","type":"Plot"},"ticker":{"id":"c124928c-3142-4815-a969-4bb877e98b33","type":"BasicTicker"}},"id":"ad19e9e8-e5f5-4053-bd75-80f32b093acd","type":"Grid"},{"attributes":{"formatter":{"id":"35a1faae-9bfe-4a42-9362-5938ed25a071","type":"BasicTickFormatter"},"plot":{"id":"6159b165-4901-461e-8e1f-20ea5142d706","type":"Plot"},"ticker":{"id":"c124928c-3142-4815-a969-4bb877e98b33","type":"BasicTicker"}},"id":"97a8eed9-eab2-4da9-8c59-a64439038697","type":"LinearAxis"},{"attributes":{},"id":"4505c00f-9c9b-45b6-a5ac-f8caef0fbbd5","type":"ToolEvents"},{"attributes":{},"id":"b3e89841-2b96-4b78-b6da-0df82de1b67f","type":"BasicTicker"},{"attributes":{},"id":"35a1faae-9bfe-4a42-9362-5938ed25a071","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"9337d18a-ebea-4d99-a977-862628aa2c14","type":"ColumnDataSource"},"glyph":{"id":"fcc2cc47-286e-466a-9423-1ace638b41f1","type":"ImageURL"},"hover_glyph":null,"muted_glyph":null},"id":"60e8e54d-64ef-4f81-90ab-75300ca4b665","type":"GlyphRenderer"},{"attributes":{"callback":null,"end":200,"start":-100},"id":"f94953c0-14b9-49a7-ba7f-100005b38a35","type":"Range1d"},{"attributes":{"data_source":{"id":"9337d18a-ebea-4d99-a977-862628aa2c14","type":"ColumnDataSource"},"glyph":{"id":"8faad1cd-320b-418e-9461-c496c7040e52","type":"ImageURL"},"hover_glyph":null,"muted_glyph":null},"id":"a95edcdc-4562-4bff-a947-1efc32280324","type":"GlyphRenderer"},{"attributes":{},"id":"a1bc886a-ea9c-48f3-b716-5f5a159f0e36","type":"BasicTickFormatter"},{"attributes":{"anchor":"center","h":{"field":"h1","units":"data"},"url":{"field":"url"},"w":{"field":"w1","units":"data"},"x":{"field":"x1"},"y":{"field":"y1"}},"id":"aef03323-dfa9-4daf-90c9-11132fe1ff61","type":"ImageURL"},{"attributes":{"below":[{"id":"9c4c6b0f-5a5b-4859-98f0-e124781d6323","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"97a8eed9-eab2-4da9-8c59-a64439038697","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"7c52bbe3-3e82-46bc-bea8-c2622a19dbb6","type":"GlyphRenderer"},{"id":"60e8e54d-64ef-4f81-90ab-75300ca4b665","type":"GlyphRenderer"},{"id":"a95edcdc-4562-4bff-a947-1efc32280324","type":"GlyphRenderer"},{"id":"9c4c6b0f-5a5b-4859-98f0-e124781d6323","type":"LinearAxis"},{"id":"97a8eed9-eab2-4da9-8c59-a64439038697","type":"LinearAxis"},{"id":"be882ebc-acd4-4f06-af07-27047e52420c","type":"Grid"},{"id":"ad19e9e8-e5f5-4053-bd75-80f32b093acd","type":"Grid"}],"title":null,"tool_events":{"id":"4505c00f-9c9b-45b6-a5ac-f8caef0fbbd5","type":"ToolEvents"},"toolbar":{"id":"4ea93c03-8bfe-48e3-be2c-4c1fd5565a0e","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"fdbcb45b-f569-4280-8132-c340cc359527","type":"Range1d"},"y_range":{"id":"f94953c0-14b9-49a7-ba7f-100005b38a35","type":"Range1d"}},"id":"6159b165-4901-461e-8e1f-20ea5142d706","type":"Plot"},{"attributes":{"formatter":{"id":"a1bc886a-ea9c-48f3-b716-5f5a159f0e36","type":"BasicTickFormatter"},"plot":{"id":"6159b165-4901-461e-8e1f-20ea5142d706","type":"Plot"},"ticker":{"id":"b3e89841-2b96-4b78-b6da-0df82de1b67f","type":"BasicTicker"}},"id":"9c4c6b0f-5a5b-4859-98f0-e124781d6323","type":"LinearAxis"},{"attributes":{"data_source":{"id":"9337d18a-ebea-4d99-a977-862628aa2c14","type":"ColumnDataSource"},"glyph":{"id":"aef03323-dfa9-4daf-90c9-11132fe1ff61","type":"ImageURL"},"hover_glyph":null,"muted_glyph":null},"id":"7c52bbe3-3e82-46bc-bea8-c2622a19dbb6","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y2","h1","x1","y1","w1","x2","url"],"data":{"h1":{"__ndarray__":"AAAAAAAAJEAAAAAAAAA0QAAAAAAAAD5AAAAAAAAAREAAAAAAAABJQA==","dtype":"float64","shape":[5]},"url":["http://bokeh.pydata.org/en/latest/_static/images/logo.png","http://bokeh.pydata.org/en/latest/_static/images/logo.png","http://bokeh.pydata.org/en/latest/_static/images/logo.png","http://bokeh.pydata.org/en/latest/_static/images/logo.png","http://bokeh.pydata.org/en/latest/_static/images/logo.png"],"w1":{"__ndarray__":"AAAAAAAAJEAAAAAAAAA0QAAAAAAAAD5AAAAAAAAAREAAAAAAAABJQA==","dtype":"float64","shape":[5]},"x1":{"__ndarray__":"AAAAAAAAAAAAAAAAAMBCQAAAAAAAwFJAAAAAAAAgXEAAAAAAAMBiQA==","dtype":"float64","shape":[5]},"x2":{"__ndarray__":"AAAAAAAAScAAAAAAAAAAAAAAAAAAAElAAAAAAAAAWUAAAAAAAMBiQA==","dtype":"float64","shape":[5]},"y1":{"__ndarray__":"AAAAAAAAAAAAAAAAAMBCQAAAAAAAwFJAAAAAAAAgXEAAAAAAAMBiQA==","dtype":"float64","shape":[5]},"y2":{"__ndarray__":"AAAAAAAAAAAAAAAAAABJQAAAAAAAAFlAAAAAAADAYkAAAAAAAABpQA==","dtype":"float64","shape":[5]}}},"id":"9337d18a-ebea-4d99-a977-862628aa2c14","type":"ColumnDataSource"},{"attributes":{},"id":"c124928c-3142-4815-a969-4bb877e98b33","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"4ea93c03-8bfe-48e3-be2c-4c1fd5565a0e","type":"Toolbar"},{"attributes":{"plot":{"id":"6159b165-4901-461e-8e1f-20ea5142d706","type":"Plot"},"ticker":{"id":"b3e89841-2b96-4b78-b6da-0df82de1b67f","type":"BasicTicker"}},"id":"be882ebc-acd4-4f06-af07-27047e52420c","type":"Grid"},{"attributes":{"h":{"units":"data","value":20},"url":{"field":"url"},"w":{"units":"data","value":20},"x":{"field":"x2"},"y":{"field":"y2"}},"id":"fcc2cc47-286e-466a-9423-1ace638b41f1","type":"ImageURL"}],"root_ids":["6159b165-4901-461e-8e1f-20ea5142d706"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"6c1d1acc-1a57-4b53-a58b-6ffffd150970","elementid":"f31bc9c5-4cba-4c0e-b66e-1a85df0d4d36","modelid":"6159b165-4901-461e-8e1f-20ea5142d706"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
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
