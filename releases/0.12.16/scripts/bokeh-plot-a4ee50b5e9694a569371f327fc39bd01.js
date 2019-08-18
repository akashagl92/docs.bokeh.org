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
      };var element = document.getElementById("b29f4b08-ef18-4481-8038-72ac88891085");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'b29f4b08-ef18-4481-8038-72ac88891085' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.16.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.16.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.16.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.16.min.js"];
    
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
                    
                  var docs_json = '{"ae1d7957-2cb5-41b6-8608-db1258161015":{"roots":{"references":[{"attributes":{},"id":"40c32289-07ce-4c48-8cd5-5a13bdc1136c","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"345f65ec-580f-417c-b91b-5fb813510492","type":"BoxSelectTool"},{"id":"0b70af3b-91e9-42d0-9264-8046e8a1e917","type":"LassoSelectTool"},{"id":"ed44b46a-0b0a-4e25-9c64-2cd4fe7d34d9","type":"HoverTool"},{"id":"7c720a2d-3f00-471e-9e96-c13d24301e74","type":"HelpTool"}]},"id":"8f6d8b34-bb9a-4d0d-9bc7-28737e6e0a12","type":"Toolbar"},{"attributes":{"formatter":{"id":"1e6e7214-09a3-4cd4-9c74-915a6c76689e","type":"BasicTickFormatter"},"plot":{"id":"7d967827-7087-4a2c-866f-3b44223ba999","subtype":"Figure","type":"Plot"},"ticker":{"id":"c79a2517-e5c1-4989-a057-e78722c68bd4","type":"BasicTicker"}},"id":"c2fb5b31-4ed0-4b80-a278-572b7593990b","type":"LinearAxis"},{"attributes":{},"id":"1e6e7214-09a3-4cd4-9c74-915a6c76689e","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y0"}},"id":"d13ed955-f88c-4ee3-b68c-4474cecf5a2a","type":"Circle"},{"attributes":{},"id":"4b4c0bad-b253-45b1-99ba-570cf012706e","type":"UnionRenderers"},{"attributes":{"children":[{"id":"21ba7b2e-6fe4-455d-ae29-58696d387434","type":"Row"}]},"id":"3f4ad9c5-8da1-4c77-94a6-34576540e35d","type":"Column"},{"attributes":{"tools":[{"id":"345f65ec-580f-417c-b91b-5fb813510492","type":"BoxSelectTool"},{"id":"0b70af3b-91e9-42d0-9264-8046e8a1e917","type":"LassoSelectTool"},{"id":"ed44b46a-0b0a-4e25-9c64-2cd4fe7d34d9","type":"HoverTool"},{"id":"7c720a2d-3f00-471e-9e96-c13d24301e74","type":"HelpTool"},{"id":"5cb18dab-bb89-4fa9-8d08-26f37e958314","type":"BoxSelectTool"},{"id":"165d021e-d37d-4e1a-8ee9-c2538a7dfba0","type":"LassoSelectTool"},{"id":"6e15ab48-99c8-404d-ad9f-c95f05be793f","type":"HoverTool"},{"id":"050305a0-8946-4ef1-9196-558b057b7ce2","type":"HelpTool"}]},"id":"20c41237-2b89-4660-8646-5d902438e8bf","type":"ProxyToolbar"},{"attributes":{},"id":"c79a2517-e5c1-4989-a057-e78722c68bd4","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"e1610fb6-5cc3-422d-a205-ef0b3462b8ac","type":"PolyAnnotation"},{"attributes":{"callback":null,"renderers":"auto"},"id":"6e15ab48-99c8-404d-ad9f-c95f05be793f","type":"HoverTool"},{"attributes":{"data_source":{"id":"7df8e3f9-f38d-4309-ac78-a703bc8c2fc1","type":"ColumnDataSource"},"glyph":{"id":"9d61248f-f86e-4bc7-a6aa-80440756d640","type":"Circle"},"hover_glyph":{"id":"484f0c6d-404c-43e8-b08a-ffa6cd5fbe27","type":"Circle"},"muted_glyph":null,"nonselection_glyph":{"id":"23babf81-310f-46b1-a0a0-cff307507496","type":"Circle"},"selection_glyph":null,"view":{"id":"f70ae614-b73c-40f1-ba81-155c713fcb50","type":"CDSView"}},"id":"de944cd1-afff-4209-9f63-12dd6bca54e7","type":"GlyphRenderer"},{"attributes":{},"id":"050305a0-8946-4ef1-9196-558b057b7ce2","type":"HelpTool"},{"attributes":{},"id":"1f103337-81f0-41f8-ba73-9f195d489fae","type":"Selection"},{"attributes":{"callback":null,"overlay":{"id":"cfa1327e-2d3e-4c4f-83fc-02f5e4a9d936","type":"BoxAnnotation"}},"id":"345f65ec-580f-417c-b91b-5fb813510492","type":"BoxSelectTool"},{"attributes":{},"id":"f8cf7f51-4063-4802-9a7e-85caff6aaa9b","type":"LinearScale"},{"attributes":{"source":{"id":"7df8e3f9-f38d-4309-ac78-a703bc8c2fc1","type":"ColumnDataSource"}},"id":"61ffe491-fe0b-42be-bc36-1a622226c880","type":"CDSView"},{"attributes":{},"id":"4faee53e-1100-4c4c-ba53-44e3df9eb3f1","type":"BasicTickFormatter"},{"attributes":{"booleans":[true,true,true,true,true,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,true,true,true,true,true]},"id":"c279210a-4d5f-468b-a14d-c6886c60836c","type":"BooleanFilter"},{"attributes":{"callback":null,"overlay":{"id":"91b5d80b-ceb4-46e5-bc3a-0ca970458453","type":"PolyAnnotation"}},"id":"0b70af3b-91e9-42d0-9264-8046e8a1e917","type":"LassoSelectTool"},{"attributes":{},"id":"93ce99d5-e35a-4e1a-9a55-148dec9db89c","type":"BasicTickFormatter"},{"attributes":{"callback":null,"renderers":"auto"},"id":"ed44b46a-0b0a-4e25-9c64-2cd4fe7d34d9","type":"HoverTool"},{"attributes":{},"id":"23b0e45a-8768-4965-b339-5ae42b46885a","type":"LinearScale"},{"attributes":{},"id":"7c720a2d-3f00-471e-9e96-c13d24301e74","type":"HelpTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y1"}},"id":"9d61248f-f86e-4bc7-a6aa-80440756d640","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"cfa1327e-2d3e-4c4f-83fc-02f5e4a9d936","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"91b5d80b-ceb4-46e5-bc3a-0ca970458453","type":"PolyAnnotation"},{"attributes":{"children":[{"id":"7d967827-7087-4a2c-866f-3b44223ba999","subtype":"Figure","type":"Plot"},{"id":"1c52a77f-d007-4b15-a20f-88bb445fde80","subtype":"Figure","type":"Plot"}]},"id":"21ba7b2e-6fe4-455d-ae29-58696d387434","type":"Row"},{"attributes":{"toolbar":{"id":"20c41237-2b89-4660-8646-5d902438e8bf","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"61ab1e07-edf6-4749-ba7d-93619eab6258","type":"ToolbarBox"},{"attributes":{"data_source":{"id":"7df8e3f9-f38d-4309-ac78-a703bc8c2fc1","type":"ColumnDataSource"},"glyph":{"id":"1092f43a-5a63-48a6-8d64-f3c4674eed75","type":"Circle"},"hover_glyph":{"id":"cd15a57d-a18a-456a-9a5a-0bcca5037540","type":"Circle"},"muted_glyph":null,"nonselection_glyph":{"id":"d13ed955-f88c-4ee3-b68c-4474cecf5a2a","type":"Circle"},"selection_glyph":null,"view":{"id":"61ffe491-fe0b-42be-bc36-1a622226c880","type":"CDSView"}},"id":"a06a8327-1648-418d-825b-3fb6f14a4934","type":"GlyphRenderer"},{"attributes":{"children":[{"id":"61ab1e07-edf6-4749-ba7d-93619eab6258","type":"ToolbarBox"},{"id":"3f4ad9c5-8da1-4c77-94a6-34576540e35d","type":"Column"}]},"id":"250fc0ec-5651-41ff-81b5-3fe4c6a2ff23","type":"Column"},{"attributes":{"formatter":{"id":"93ce99d5-e35a-4e1a-9a55-148dec9db89c","type":"BasicTickFormatter"},"plot":{"id":"7d967827-7087-4a2c-866f-3b44223ba999","subtype":"Figure","type":"Plot"},"ticker":{"id":"40c32289-07ce-4c48-8cd5-5a13bdc1136c","type":"BasicTicker"}},"id":"788bcef3-ce92-4318-afbc-0c53fa894fe7","type":"LinearAxis"},{"attributes":{},"id":"8a903480-433c-4955-a5c7-b622d3ea7459","type":"LinearScale"},{"attributes":{"callback":null},"id":"d2d5da4a-cdf5-4dce-b95d-943a34d3f12e","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"5cb18dab-bb89-4fa9-8d08-26f37e958314","type":"BoxSelectTool"},{"id":"165d021e-d37d-4e1a-8ee9-c2538a7dfba0","type":"LassoSelectTool"},{"id":"6e15ab48-99c8-404d-ad9f-c95f05be793f","type":"HoverTool"},{"id":"050305a0-8946-4ef1-9196-558b057b7ce2","type":"HelpTool"}]},"id":"7c3890b3-e0b9-47b0-bb64-7221f36f17a5","type":"Toolbar"},{"attributes":{"below":[{"id":"b5dfc948-3987-44c6-87c9-853279db44a3","type":"LinearAxis"}],"left":[{"id":"0a45cd39-0e4a-412d-909b-1cd333c4f858","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"b5dfc948-3987-44c6-87c9-853279db44a3","type":"LinearAxis"},{"id":"3f456528-9ccf-40d4-a8ea-d521224d3906","type":"Grid"},{"id":"0a45cd39-0e4a-412d-909b-1cd333c4f858","type":"LinearAxis"},{"id":"af6b7796-d8ff-4081-a1b0-164f2f8d5f93","type":"Grid"},{"id":"da41a92a-af4b-4b37-a4e2-6b56adfd5256","type":"BoxAnnotation"},{"id":"e1610fb6-5cc3-422d-a205-ef0b3462b8ac","type":"PolyAnnotation"},{"id":"de944cd1-afff-4209-9f63-12dd6bca54e7","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"7c3890b3-e0b9-47b0-bb64-7221f36f17a5","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"c4abc4a4-95eb-4704-a07f-025b16e8b4bd","type":"DataRange1d"},"x_scale":{"id":"8a903480-433c-4955-a5c7-b622d3ea7459","type":"LinearScale"},"y_range":{"id":"d2d5da4a-cdf5-4dce-b95d-943a34d3f12e","type":"DataRange1d"},"y_scale":{"id":"55a70986-95de-4506-be37-c097652276ee","type":"LinearScale"}},"id":"1c52a77f-d007-4b15-a20f-88bb445fde80","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"802ccc85-d6a0-4926-aa9a-e5caee129498","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y1"}},"id":"23babf81-310f-46b1-a0a0-cff307507496","type":"Circle"},{"attributes":{"callback":null},"id":"c4abc4a4-95eb-4704-a07f-025b16e8b4bd","type":"DataRange1d"},{"attributes":{},"id":"55a70986-95de-4506-be37-c097652276ee","type":"LinearScale"},{"attributes":{"filters":[{"id":"c279210a-4d5f-468b-a14d-c6886c60836c","type":"BooleanFilter"}],"source":{"id":"7df8e3f9-f38d-4309-ac78-a703bc8c2fc1","type":"ColumnDataSource"}},"id":"f70ae614-b73c-40f1-ba81-155c713fcb50","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"da41a92a-af4b-4b37-a4e2-6b56adfd5256","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"a6bddf38-b552-4448-b581-af96c3ca7cf5","type":"DataRange1d"},{"attributes":{"plot":{"id":"1c52a77f-d007-4b15-a20f-88bb445fde80","subtype":"Figure","type":"Plot"},"ticker":{"id":"91fc25c8-2465-402d-b0ec-122d5c03a2d0","type":"BasicTicker"}},"id":"3f456528-9ccf-40d4-a8ea-d521224d3906","type":"Grid"},{"attributes":{"callback":null,"data":{"x":[-20,-19,-18,-17,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"y0":[20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"y1":[400,361,324,289,256,225,196,169,144,121,100,81,64,49,36,25,16,9,4,1,0,1,4,9,16,25,36,49,64,81,100,121,144,169,196,225,256,289,324,361,400]},"selected":{"id":"1f103337-81f0-41f8-ba73-9f195d489fae","type":"Selection"},"selection_policy":{"id":"4b4c0bad-b253-45b1-99ba-570cf012706e","type":"UnionRenderers"}},"id":"7df8e3f9-f38d-4309-ac78-a703bc8c2fc1","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"firebrick"},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y1"}},"id":"484f0c6d-404c-43e8-b08a-ffa6cd5fbe27","type":"Circle"},{"attributes":{"plot":{"id":"7d967827-7087-4a2c-866f-3b44223ba999","subtype":"Figure","type":"Plot"},"ticker":{"id":"40c32289-07ce-4c48-8cd5-5a13bdc1136c","type":"BasicTicker"}},"id":"ae08e5d4-6f04-4272-92a6-533733917ce6","type":"Grid"},{"attributes":{"formatter":{"id":"4faee53e-1100-4c4c-ba53-44e3df9eb3f1","type":"BasicTickFormatter"},"plot":{"id":"1c52a77f-d007-4b15-a20f-88bb445fde80","subtype":"Figure","type":"Plot"},"ticker":{"id":"91fc25c8-2465-402d-b0ec-122d5c03a2d0","type":"BasicTicker"}},"id":"b5dfc948-3987-44c6-87c9-853279db44a3","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"1c52a77f-d007-4b15-a20f-88bb445fde80","subtype":"Figure","type":"Plot"},"ticker":{"id":"64139a87-e39a-4ea7-88bf-bb0ad391f799","type":"BasicTicker"}},"id":"af6b7796-d8ff-4081-a1b0-164f2f8d5f93","type":"Grid"},{"attributes":{"below":[{"id":"788bcef3-ce92-4318-afbc-0c53fa894fe7","type":"LinearAxis"}],"left":[{"id":"c2fb5b31-4ed0-4b80-a278-572b7593990b","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"788bcef3-ce92-4318-afbc-0c53fa894fe7","type":"LinearAxis"},{"id":"ae08e5d4-6f04-4272-92a6-533733917ce6","type":"Grid"},{"id":"c2fb5b31-4ed0-4b80-a278-572b7593990b","type":"LinearAxis"},{"id":"ef3f82e4-648d-4601-a86f-33fff1f3e76b","type":"Grid"},{"id":"cfa1327e-2d3e-4c4f-83fc-02f5e4a9d936","type":"BoxAnnotation"},{"id":"91b5d80b-ceb4-46e5-bc3a-0ca970458453","type":"PolyAnnotation"},{"id":"a06a8327-1648-418d-825b-3fb6f14a4934","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"8f6d8b34-bb9a-4d0d-9bc7-28737e6e0a12","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"a6bddf38-b552-4448-b581-af96c3ca7cf5","type":"DataRange1d"},"x_scale":{"id":"f8cf7f51-4063-4802-9a7e-85caff6aaa9b","type":"LinearScale"},"y_range":{"id":"225eadde-9fd5-4be5-85c9-2e6660f425e3","type":"DataRange1d"},"y_scale":{"id":"23b0e45a-8768-4965-b339-5ae42b46885a","type":"LinearScale"}},"id":"7d967827-7087-4a2c-866f-3b44223ba999","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"91fc25c8-2465-402d-b0ec-122d5c03a2d0","type":"BasicTicker"},{"attributes":{"formatter":{"id":"802ccc85-d6a0-4926-aa9a-e5caee129498","type":"BasicTickFormatter"},"plot":{"id":"1c52a77f-d007-4b15-a20f-88bb445fde80","subtype":"Figure","type":"Plot"},"ticker":{"id":"64139a87-e39a-4ea7-88bf-bb0ad391f799","type":"BasicTicker"}},"id":"0a45cd39-0e4a-412d-909b-1cd333c4f858","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"firebrick"},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y0"}},"id":"cd15a57d-a18a-456a-9a5a-0bcca5037540","type":"Circle"},{"attributes":{},"id":"64139a87-e39a-4ea7-88bf-bb0ad391f799","type":"BasicTicker"},{"attributes":{"callback":null,"overlay":{"id":"da41a92a-af4b-4b37-a4e2-6b56adfd5256","type":"BoxAnnotation"}},"id":"5cb18dab-bb89-4fa9-8d08-26f37e958314","type":"BoxSelectTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y0"}},"id":"1092f43a-5a63-48a6-8d64-f3c4674eed75","type":"Circle"},{"attributes":{"callback":null,"overlay":{"id":"e1610fb6-5cc3-422d-a205-ef0b3462b8ac","type":"PolyAnnotation"}},"id":"165d021e-d37d-4e1a-8ee9-c2538a7dfba0","type":"LassoSelectTool"},{"attributes":{"dimension":1,"plot":{"id":"7d967827-7087-4a2c-866f-3b44223ba999","subtype":"Figure","type":"Plot"},"ticker":{"id":"c79a2517-e5c1-4989-a057-e78722c68bd4","type":"BasicTicker"}},"id":"ef3f82e4-648d-4601-a86f-33fff1f3e76b","type":"Grid"},{"attributes":{"callback":null},"id":"225eadde-9fd5-4be5-85c9-2e6660f425e3","type":"DataRange1d"}],"root_ids":["250fc0ec-5651-41ff-81b5-3fe4c6a2ff23"]},"title":"Bokeh Application","version":"0.12.16"}}';
                  var render_items = [{"docid":"ae1d7957-2cb5-41b6-8608-db1258161015","elementid":"b29f4b08-ef18-4481-8038-72ac88891085","modelid":"250fc0ec-5651-41ff-81b5-3fe4c6a2ff23"}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.16.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.16.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.16.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.16.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.16.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.16.min.css");
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