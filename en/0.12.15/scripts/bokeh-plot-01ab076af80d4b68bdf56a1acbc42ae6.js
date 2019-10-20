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
      };var element = document.getElementById("af5f69d7-f584-4a3d-a66e-75fb44cbda8b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'af5f69d7-f584-4a3d-a66e-75fb44cbda8b' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.15.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.15.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.15.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.15.min.js"];
    
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
                    
                  var docs_json = '{"251dcd5b-1091-436e-8b51-c129b2573ed9":{"roots":{"references":[{"attributes":{"booleans":[true,true,true,true,true,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,true,true,true,true,true]},"id":"79a3d519-e827-4091-a913-5fb31d0fb844","type":"BooleanFilter"},{"attributes":{},"id":"46fd14a3-530d-460b-86ca-628e8f1f1213","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"ae9e983c-7112-4edd-b91a-17e27810b903","type":"DataRange1d"},{"attributes":{},"id":"af910c4f-19be-442d-8edb-6128878d3d73","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"be165dae-21a0-42c8-8d08-36b3473be77c","subtype":"Figure","type":"Plot"},"ticker":{"id":"69056fd6-73ff-4974-bac5-bb6314000f18","type":"BasicTicker"}},"id":"c087aff4-4ff2-43de-aca8-1857ca42405b","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"26a7aca2-ca53-4089-aff9-edc52e22909d","subtype":"Figure","type":"Plot"},"ticker":{"id":"af910c4f-19be-442d-8edb-6128878d3d73","type":"BasicTicker"}},"id":"2f5c41bf-275e-4c29-afbb-dfb0b1eff73a","type":"Grid"},{"attributes":{"filters":[{"id":"79a3d519-e827-4091-a913-5fb31d0fb844","type":"BooleanFilter"}],"source":{"id":"1e3a4f53-b239-4729-84f6-57bc78e33cf8","type":"ColumnDataSource"}},"id":"8274b9c8-c110-4e15-8ad8-aad33fe7ba44","type":"CDSView"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y1"}},"id":"c03412d8-80a0-4b81-b215-9870aaf1f169","type":"Circle"},{"attributes":{"fill_color":{"value":"firebrick"},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y1"}},"id":"8e176fde-161f-4941-9445-7d00dbf1259c","type":"Circle"},{"attributes":{"callback":null,"overlay":{"id":"b93da3c9-b931-43f3-9578-025d9289baaf","type":"BoxAnnotation"},"renderers":[{"id":"21cf1419-155d-49ae-874f-787100bd4132","type":"GlyphRenderer"}]},"id":"919d10d4-3591-4850-aa59-1f49c1764977","type":"BoxSelectTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y0"}},"id":"f01778a7-84c5-4c0b-899c-9e513fb5ad32","type":"Circle"},{"attributes":{},"id":"c767c61a-41bd-4c55-b39b-6a4290705e21","type":"BasicTickFormatter"},{"attributes":{"callback":null,"overlay":{"id":"dfd8a8b4-e788-42a9-b03b-2bf5ea84dbc3","type":"PolyAnnotation"}},"id":"3bb91b23-43e4-4dc7-98cc-346d29705794","type":"LassoSelectTool"},{"attributes":{"toolbar":{"id":"6f51e467-005a-45e5-95ed-2d524c56fea4","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"bf450c5d-e0d7-454d-894b-d624007e9617","type":"ToolbarBox"},{"attributes":{"plot":{"id":"be165dae-21a0-42c8-8d08-36b3473be77c","subtype":"Figure","type":"Plot"},"ticker":{"id":"3f1e2895-6616-4848-a6fd-247137b14399","type":"BasicTicker"}},"id":"b5fa03fa-975a-412b-b53f-3d8ef012773d","type":"Grid"},{"attributes":{"callback":null},"id":"521b846e-7ffc-47cc-b86f-53a170cf61a4","type":"HoverTool"},{"attributes":{},"id":"3f1e2895-6616-4848-a6fd-247137b14399","type":"BasicTicker"},{"attributes":{},"id":"82559faa-c4b0-48ed-a340-0ae2ee7d2675","type":"HelpTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"b93da3c9-b931-43f3-9578-025d9289baaf","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"c767c61a-41bd-4c55-b39b-6a4290705e21","type":"BasicTickFormatter"},"plot":{"id":"26a7aca2-ca53-4089-aff9-edc52e22909d","subtype":"Figure","type":"Plot"},"ticker":{"id":"0588245c-7f65-4cde-be73-d58034dc027d","type":"BasicTicker"}},"id":"f3246996-b261-401c-a3af-9ee9ac335436","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y1"}},"id":"8aee2b8c-c1b7-42c0-98d3-3449fde0e3c3","type":"Circle"},{"attributes":{},"id":"0588245c-7f65-4cde-be73-d58034dc027d","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"dfd8a8b4-e788-42a9-b03b-2bf5ea84dbc3","type":"PolyAnnotation"},{"attributes":{"callback":null,"overlay":{"id":"64f2876d-9192-4159-9461-0ea3b7c51573","type":"BoxAnnotation"},"renderers":[{"id":"f72e16d2-ef80-434d-a5b6-8d7cb845a7c2","type":"GlyphRenderer"}]},"id":"5af9a4ee-371d-436f-a585-16b1c96e2b22","type":"BoxSelectTool"},{"attributes":{"data_source":{"id":"1e3a4f53-b239-4729-84f6-57bc78e33cf8","type":"ColumnDataSource"},"glyph":{"id":"c03412d8-80a0-4b81-b215-9870aaf1f169","type":"Circle"},"hover_glyph":{"id":"8e176fde-161f-4941-9445-7d00dbf1259c","type":"Circle"},"muted_glyph":null,"nonselection_glyph":{"id":"8aee2b8c-c1b7-42c0-98d3-3449fde0e3c3","type":"Circle"},"selection_glyph":null,"view":{"id":"8274b9c8-c110-4e15-8ad8-aad33fe7ba44","type":"CDSView"}},"id":"21cf1419-155d-49ae-874f-787100bd4132","type":"GlyphRenderer"},{"attributes":{},"id":"7e069dcb-d292-4f58-8129-32a3821d3317","type":"LinearScale"},{"attributes":{"source":{"id":"1e3a4f53-b239-4729-84f6-57bc78e33cf8","type":"ColumnDataSource"}},"id":"af6c8790-9ab2-4e8e-9eda-e1f81fb5e93e","type":"CDSView"},{"attributes":{"tools":[{"id":"5af9a4ee-371d-436f-a585-16b1c96e2b22","type":"BoxSelectTool"},{"id":"c9b9b460-31ea-4680-95f7-1f89edd7d4dd","type":"LassoSelectTool"},{"id":"9cd70edf-9e22-4d9d-a03e-7248c34483ab","type":"HoverTool"},{"id":"41c9dd57-ce33-4cc0-8ef6-b944a21aafb3","type":"HelpTool"},{"id":"919d10d4-3591-4850-aa59-1f49c1764977","type":"BoxSelectTool"},{"id":"3bb91b23-43e4-4dc7-98cc-346d29705794","type":"LassoSelectTool"},{"id":"521b846e-7ffc-47cc-b86f-53a170cf61a4","type":"HoverTool"},{"id":"82559faa-c4b0-48ed-a340-0ae2ee7d2675","type":"HelpTool"}]},"id":"6f51e467-005a-45e5-95ed-2d524c56fea4","type":"ProxyToolbar"},{"attributes":{"callback":null,"overlay":{"id":"0751c6b1-8f14-46c8-894a-a6d3f6f33060","type":"PolyAnnotation"}},"id":"c9b9b460-31ea-4680-95f7-1f89edd7d4dd","type":"LassoSelectTool"},{"attributes":{"children":[{"id":"bf450c5d-e0d7-454d-894b-d624007e9617","type":"ToolbarBox"},{"id":"d1e14645-6e59-419c-b04f-9c809ee30f94","type":"Column"}]},"id":"f8b60413-5e93-46fc-a2c2-536103385ced","type":"Column"},{"attributes":{"callback":null},"id":"9cd70edf-9e22-4d9d-a03e-7248c34483ab","type":"HoverTool"},{"attributes":{},"id":"41c9dd57-ce33-4cc0-8ef6-b944a21aafb3","type":"HelpTool"},{"attributes":{},"id":"f7f3e7fd-a3b6-4d9c-9bf1-96fc5b375e68","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"64f2876d-9192-4159-9461-0ea3b7c51573","type":"BoxAnnotation"},{"attributes":{"callback":null,"column_names":["x","y0","y1"],"data":{"x":[-20,-19,-18,-17,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"y0":[20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"y1":[400,361,324,289,256,225,196,169,144,121,100,81,64,49,36,25,16,9,4,1,0,1,4,9,16,25,36,49,64,81,100,121,144,169,196,225,256,289,324,361,400]},"selected":null,"selection_policy":null},"id":"1e3a4f53-b239-4729-84f6-57bc78e33cf8","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"0751c6b1-8f14-46c8-894a-a6d3f6f33060","type":"PolyAnnotation"},{"attributes":{},"id":"f03d0db4-31e6-43a7-9301-571a63d77d6e","type":"LinearScale"},{"attributes":{"data_source":{"id":"1e3a4f53-b239-4729-84f6-57bc78e33cf8","type":"ColumnDataSource"},"glyph":{"id":"f01778a7-84c5-4c0b-899c-9e513fb5ad32","type":"Circle"},"hover_glyph":{"id":"d1321476-f283-42c4-8310-af660e93cbf4","type":"Circle"},"muted_glyph":null,"nonselection_glyph":{"id":"0048225e-1aaf-4305-83bd-df29cefc9268","type":"Circle"},"selection_glyph":null,"view":{"id":"af6c8790-9ab2-4e8e-9eda-e1f81fb5e93e","type":"CDSView"}},"id":"f72e16d2-ef80-434d-a5b6-8d7cb845a7c2","type":"GlyphRenderer"},{"attributes":{},"id":"69056fd6-73ff-4974-bac5-bb6314000f18","type":"BasicTicker"},{"attributes":{"children":[{"id":"81b3fa35-232c-44d1-8137-9ac02d876791","type":"Row"}]},"id":"d1e14645-6e59-419c-b04f-9c809ee30f94","type":"Column"},{"attributes":{"formatter":{"id":"f7f3e7fd-a3b6-4d9c-9bf1-96fc5b375e68","type":"BasicTickFormatter"},"plot":{"id":"be165dae-21a0-42c8-8d08-36b3473be77c","subtype":"Figure","type":"Plot"},"ticker":{"id":"69056fd6-73ff-4974-bac5-bb6314000f18","type":"BasicTicker"}},"id":"78a1ebdf-c820-408c-a402-4f79133e0c4a","type":"LinearAxis"},{"attributes":{"below":[{"id":"f3246996-b261-401c-a3af-9ee9ac335436","type":"LinearAxis"}],"left":[{"id":"674afbb4-d112-4530-9384-90f228543210","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"f3246996-b261-401c-a3af-9ee9ac335436","type":"LinearAxis"},{"id":"e0f42194-1a56-4737-aa84-687fe0037ec0","type":"Grid"},{"id":"674afbb4-d112-4530-9384-90f228543210","type":"LinearAxis"},{"id":"2f5c41bf-275e-4c29-afbb-dfb0b1eff73a","type":"Grid"},{"id":"b93da3c9-b931-43f3-9578-025d9289baaf","type":"BoxAnnotation"},{"id":"dfd8a8b4-e788-42a9-b03b-2bf5ea84dbc3","type":"PolyAnnotation"},{"id":"21cf1419-155d-49ae-874f-787100bd4132","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"6d1f0cf2-6b9f-4c60-9cf3-5b1bdffc82db","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"61419d8b-03b3-4b4e-8486-8e8560e2608e","type":"DataRange1d"},"x_scale":{"id":"b1cae2e9-ec68-4243-9c59-04607ff0a0b9","type":"LinearScale"},"y_range":{"id":"a289ae3e-b55f-4334-a24c-afee9a96fc8a","type":"DataRange1d"},"y_scale":{"id":"9667aec9-ae7a-482d-b483-be0e2541d2df","type":"LinearScale"}},"id":"26a7aca2-ca53-4089-aff9-edc52e22909d","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"919d10d4-3591-4850-aa59-1f49c1764977","type":"BoxSelectTool"},{"id":"3bb91b23-43e4-4dc7-98cc-346d29705794","type":"LassoSelectTool"},{"id":"521b846e-7ffc-47cc-b86f-53a170cf61a4","type":"HoverTool"},{"id":"82559faa-c4b0-48ed-a340-0ae2ee7d2675","type":"HelpTool"}]},"id":"6d1f0cf2-6b9f-4c60-9cf3-5b1bdffc82db","type":"Toolbar"},{"attributes":{"formatter":{"id":"fa623c29-ea0c-47d6-8659-6c679c5ba14d","type":"BasicTickFormatter"},"plot":{"id":"be165dae-21a0-42c8-8d08-36b3473be77c","subtype":"Figure","type":"Plot"},"ticker":{"id":"3f1e2895-6616-4848-a6fd-247137b14399","type":"BasicTicker"}},"id":"932e5d38-ea6f-4a7a-af7c-1f708306fd93","type":"LinearAxis"},{"attributes":{},"id":"fa623c29-ea0c-47d6-8659-6c679c5ba14d","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"932e5d38-ea6f-4a7a-af7c-1f708306fd93","type":"LinearAxis"}],"left":[{"id":"78a1ebdf-c820-408c-a402-4f79133e0c4a","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"932e5d38-ea6f-4a7a-af7c-1f708306fd93","type":"LinearAxis"},{"id":"b5fa03fa-975a-412b-b53f-3d8ef012773d","type":"Grid"},{"id":"78a1ebdf-c820-408c-a402-4f79133e0c4a","type":"LinearAxis"},{"id":"c087aff4-4ff2-43de-aca8-1857ca42405b","type":"Grid"},{"id":"64f2876d-9192-4159-9461-0ea3b7c51573","type":"BoxAnnotation"},{"id":"0751c6b1-8f14-46c8-894a-a6d3f6f33060","type":"PolyAnnotation"},{"id":"f72e16d2-ef80-434d-a5b6-8d7cb845a7c2","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"f9d460e2-f843-487c-8078-77b843d80f63","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"06a10fe6-bf22-4473-9ad5-f1b33a057a31","type":"DataRange1d"},"x_scale":{"id":"f03d0db4-31e6-43a7-9301-571a63d77d6e","type":"LinearScale"},"y_range":{"id":"ae9e983c-7112-4edd-b91a-17e27810b903","type":"DataRange1d"},"y_scale":{"id":"7e069dcb-d292-4f58-8129-32a3821d3317","type":"LinearScale"}},"id":"be165dae-21a0-42c8-8d08-36b3473be77c","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"46fd14a3-530d-460b-86ca-628e8f1f1213","type":"BasicTickFormatter"},"plot":{"id":"26a7aca2-ca53-4089-aff9-edc52e22909d","subtype":"Figure","type":"Plot"},"ticker":{"id":"af910c4f-19be-442d-8edb-6128878d3d73","type":"BasicTicker"}},"id":"674afbb4-d112-4530-9384-90f228543210","type":"LinearAxis"},{"attributes":{"callback":null},"id":"61419d8b-03b3-4b4e-8486-8e8560e2608e","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"firebrick"},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y0"}},"id":"d1321476-f283-42c4-8310-af660e93cbf4","type":"Circle"},{"attributes":{"callback":null},"id":"a289ae3e-b55f-4334-a24c-afee9a96fc8a","type":"DataRange1d"},{"attributes":{"callback":null},"id":"06a10fe6-bf22-4473-9ad5-f1b33a057a31","type":"DataRange1d"},{"attributes":{"plot":{"id":"26a7aca2-ca53-4089-aff9-edc52e22909d","subtype":"Figure","type":"Plot"},"ticker":{"id":"0588245c-7f65-4cde-be73-d58034dc027d","type":"BasicTicker"}},"id":"e0f42194-1a56-4737-aa84-687fe0037ec0","type":"Grid"},{"attributes":{"children":[{"id":"be165dae-21a0-42c8-8d08-36b3473be77c","subtype":"Figure","type":"Plot"},{"id":"26a7aca2-ca53-4089-aff9-edc52e22909d","subtype":"Figure","type":"Plot"}]},"id":"81b3fa35-232c-44d1-8137-9ac02d876791","type":"Row"},{"attributes":{},"id":"b1cae2e9-ec68-4243-9c59-04607ff0a0b9","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"5af9a4ee-371d-436f-a585-16b1c96e2b22","type":"BoxSelectTool"},{"id":"c9b9b460-31ea-4680-95f7-1f89edd7d4dd","type":"LassoSelectTool"},{"id":"9cd70edf-9e22-4d9d-a03e-7248c34483ab","type":"HoverTool"},{"id":"41c9dd57-ce33-4cc0-8ef6-b944a21aafb3","type":"HelpTool"}]},"id":"f9d460e2-f843-487c-8078-77b843d80f63","type":"Toolbar"},{"attributes":{},"id":"9667aec9-ae7a-482d-b483-be0e2541d2df","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y0"}},"id":"0048225e-1aaf-4305-83bd-df29cefc9268","type":"Circle"}],"root_ids":["f8b60413-5e93-46fc-a2c2-536103385ced"]},"title":"Bokeh Application","version":"0.12.15"}}';
                  var render_items = [{"docid":"251dcd5b-1091-436e-8b51-c129b2573ed9","elementid":"af5f69d7-f584-4a3d-a66e-75fb44cbda8b","modelid":"f8b60413-5e93-46fc-a2c2-536103385ced"}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.15.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.15.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.15.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.15.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.15.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.15.min.css");
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