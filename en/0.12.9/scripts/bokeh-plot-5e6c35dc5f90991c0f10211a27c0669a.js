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
      };var element = document.getElementById("9ceadf6e-bab8-4785-ae16-ac898d53ea53");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '9ceadf6e-bab8-4785-ae16-ac898d53ea53' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.9.min.js"];
    
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
                    var docs_json = {"2e61de4d-f270-4509-a625-1921ef108f49":{"roots":{"references":[{"attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]},"id":"6fdf3100-5cc1-4c55-aa89-5207c3b18269","type":"DaysTicker"},{"attributes":{"data_source":{"id":"d04a0f68-8f1b-4024-8577-4bd91508d3a0","type":"ColumnDataSource"},"glyph":{"id":"ed0b3c2a-afa9-4cba-9a6d-0af596f7c9cb","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"da82e491-2a16-4d19-b3cd-c5befa902fbf","type":"Line"},"selection_glyph":null,"view":{"id":"cc62e32a-6b27-4fa3-a123-5a8c07c6b5c8","type":"CDSView"}},"id":"631ef3fa-1b44-4f74-bcff-27c319b0f6a5","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.05},"fill_color":{"value":"grey"},"line_color":{"value":null},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"3df1c57a-3bb7-4a2b-82f1-8e70625f0ad7","type":"Circle"},{"attributes":{"below":[{"id":"bedc5b99-d696-43a2-a392-bd9d02e3546e","type":"DatetimeAxis"}],"left":[{"id":"66839797-2bbe-4557-8c27-6539b8c21448","type":"LinearAxis"}],"plot_height":300,"renderers":[{"id":"bedc5b99-d696-43a2-a392-bd9d02e3546e","type":"DatetimeAxis"},{"id":"5211d2a7-f7eb-45cd-8414-93b9a1f89b99","type":"Grid"},{"id":"66839797-2bbe-4557-8c27-6539b8c21448","type":"LinearAxis"},{"id":"a1dbf647-c6f3-4eab-b995-15a7b175d9f7","type":"Grid"},{"id":"631ef3fa-1b44-4f74-bcff-27c319b0f6a5","type":"GlyphRenderer"},{"id":"cdd8a7ef-aa33-4688-a26a-42d6fb9e622d","type":"GlyphRenderer"}],"title":{"id":"788beae1-8a24-4b37-a4ff-31170278d544","type":"Title"},"toolbar":{"id":"7b8eb66f-1f5b-4a91-929c-701599ab4162","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"cd61f145-e2ef-4b58-a0c0-44c8da03c7ff","type":"DataRange1d"},"x_scale":{"id":"b63b137e-5932-4d02-ae4b-fccee8b45f44","type":"LinearScale"},"y_range":{"id":"e114fd78-2b3a-4cb8-97ae-4e20f7e0fa47","type":"DataRange1d"},"y_scale":{"id":"f76b827e-957d-44a8-87cc-c203d479ffb4","type":"LinearScale"}},"id":"f92e7d58-9a2a-4e45-a82f-54dac1344ab6","subtype":"Figure","type":"Plot"},{"attributes":{"plot":null,"text":"Hover over points"},"id":"788beae1-8a24-4b37-a4ff-31170278d544","type":"Title"},{"attributes":{"months":[0,2,4,6,8,10]},"id":"4c7acea5-62e5-4b02-9a1e-44000f73c2ea","type":"MonthsTicker"},{"attributes":{"mantissas":[1,2,5],"max_interval":500.0,"num_minor_ticks":0},"id":"33050f60-c876-46fc-98ba-274b5caa0dbd","type":"AdaptiveTicker"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"AADyke23ckIAADDb7bdyQgAAbiTut3JCAACsbe63ckIAAOq27rdyQgAAKADvt3JCAABmSe+3ckIAAKSS77dyQgAA4tvvt3JCAAAgJfC3ckIAAF5u8LdyQgAAnLfwt3JCAADaAPG3ckIAABhK8bdyQgAAVpPxt3JCAACU3PG3ckIAANIl8rdyQgAAEG/yt3JCAABOuPK3ckIAAIwB87dyQgAAykrzt3JCAAAIlPO3ckIAAEbd87dyQgAAhCb0t3JCAADCb/S3ckIAAAC59LdyQgAAPgL1t3JCAAB8S/W3ckIAALqU9bdyQgAA+N31t3JCAAA2J/a3ckIAAHRw9rdyQgAAsrn2t3JCAADwAve3ckIAAC5M97dyQgAAbJX3t3JCAACq3ve3ckIAAOgn+LdyQgAAJnH4t3JCAABkuvi3ckIAAKID+bdyQgAA4Ez5t3JCAAAelvm3ckIAAFzf+bdyQgAAmij6t3JCAADYcfq3ckIAABa7+rdyQgAAVAT7t3JCAACSTfu3ckIAANCW+7dyQgAADuD7t3JCAABMKfy3ckIAAIpy/LdyQgAAyLv8t3JCAAAGBf23ckIAAERO/bdyQgAAgpf9t3JCAADA4P23ckIAAP4p/rdyQgAAPHP+t3JCAAB6vP63ckIAALgF/7dyQgAA9k7/t3JCAAA0mP+3ckIAAHLh/7dyQgAAsCoAuHJCAADucwC4ckIAACy9ALhyQgAAagYBuHJCAACoTwG4ckIAAOaYAbhyQgAAJOIBuHJCAABiKwK4ckIAAKB0ArhyQgAA3r0CuHJCAAAcBwO4ckIAAFpQA7hyQgAAmJkDuHJCAADW4gO4ckIAABQsBLhyQgAAUnUEuHJCAACQvgS4ckIAAM4HBbhyQgAADFEFuHJCAABKmgW4ckIAAIjjBbhyQgAAxiwGuHJCAAAEdga4ckIAAEK/BrhyQgAAgAgHuHJCAAC+UQe4ckIAAPyaB7hyQgAAOuQHuHJCAAB4LQi4ckIAALZ2CLhyQgAA9L8IuHJCAAAyCQm4ckIAAHBSCbhyQgAArpsJuHJCAADs5Am4ckIAACouCrhyQgAAaHcKuHJCAACmwAq4ckIAAOQJC7hyQgAAIlMLuHJCAABgnAu4ckIAAJ7lC7hyQgAA3C4MuHJCAAAaeAy4ckIAAFjBDLhyQgAAlgoNuHJCAADUUw24ckIAABKdDbhyQgAAUOYNuHJCAACOLw64ckIAAMx4DrhyQgAACsIOuHJCAABICw+4ckIAAIZUD7hyQgAAxJ0PuHJCAAAC5w+4ckIAAEAwELhyQgAAfnkQuHJCAAC8whC4ckIAAPoLEbhyQgAAOFURuHJCAAB2nhG4ckIAALTnEbhyQgAA8jASuHJCAAAwehK4ckIAAG7DErhyQgAArAwTuHJCAADqVRO4ckIAACifE7hyQgAAZugTuHJCAACkMRS4ckIAAOJ6FLhyQgAAIMQUuHJCAABeDRW4ckIAAJxWFbhyQgAA2p8VuHJCAAAY6RW4ckIAAFYyFrhyQgAAlHsWuHJCAADSxBa4ckIAABAOF7hyQgAATlcXuHJCAACMoBe4ckIAAMrpF7hyQgAACDMYuHJCAABGfBi4ckIAAITFGLhyQgAAwg4ZuHJCAAAAWBm4ckIAAD6hGbhyQgAAfOoZuHJCAAC6Mxq4ckIAAPh8GrhyQgAANsYauHJCAAB0Dxu4ckIAALJYG7hyQgAA8KEbuHJCAAAu6xu4ckIAAGw0HLhyQgAAqn0cuHJCAADoxhy4ckIAACYQHbhyQgAAZFkduHJCAACioh24ckIAAODrHbhyQgAAHjUeuHJCAABcfh64ckIAAJrHHrhyQgAA2BAfuHJCAAAWWh+4ckIAAFSjH7hyQgAAkuwfuHJCAADQNSC4ckIAAA5/ILhyQgAATMgguHJCAACKESG4ckIAAMhaIbhyQgAABqQhuHJCAABE7SG4ckIAAII2IrhyQgAAwH8iuHJCAAD+yCK4ckIAADwSI7hyQgAAelsjuHJCAAC4pCO4ckIAAPbtI7hyQgAANDckuHJCAABygCS4ckIAALDJJLhyQgAA7hIluHJCAAAsXCW4ckIAAGqlJbhyQgAAqO4luHJCAADmNya4ckIAACSBJrhyQgAAYsomuHJCAACgEye4ckIAAN5cJ7hyQgAAHKYnuHJCAABa7ye4ckIAAJg4KLhyQgAA1oEouHJCAAAUyyi4ckIAAFIUKbhyQgAAkF0puHJCAADOpim4ckIAAAzwKbhyQgAASjkquHJCAACIgiq4ckIAAMbLKrhyQgAABBUruHJCAABCXiu4ckIAAICnK7hyQgAAvvAruHJCAAD8OSy4ckIAADqDLLhyQgAAeMwsuHJCAAC2FS24ckIAAPReLbhyQgAAMqgtuHJCAABw8S24ckIAAK46LrhyQgAA7IMuuHJCAAAqzS64ckIAAGgWL7hyQgAApl8vuHJCAADkqC+4ckIAACLyL7hyQgAAYDswuHJCAACehDC4ckIAANzNMLhyQgAAGhcxuHJCAABYYDG4ckIAAJapMbhyQgAA1PIxuHJCAAASPDK4ckIAAFCFMrhyQgAAjs4yuHJCAADMFzO4ckIAAAphM7hyQgAASKozuHJCAACG8zO4ckIAAMQ8NLhyQgAAAoY0uHJCAABAzzS4ckIAAH4YNbhyQgAAvGE1uHJCAAD6qjW4ckIAADj0NbhyQgAAdj02uHJCAAC0hja4ckIAAPLPNrhyQgAAMBk3uHJCAABuYje4ckIAAKyrN7hyQgAA6vQ3uHJCAAAoPji4ckIAAGaHOLhyQgAApNA4uHJCAADiGTm4ckIAACBjObhyQgAAXqw5uHJCAACc9Tm4ckIAANo+OrhyQgAAGIg6uHJCAABW0Tq4ckIAAJQaO7hyQgAA0mM7uHJCAAAQrTu4ckIAAE72O7hyQgAAjD88uHJCAADKiDy4ckIAAAjSPLhyQgAARhs9uHJCAACEZD24ckIAAMKtPbhyQgAAAPc9uHJCAAA+QD64ckIAAHyJPrhyQgAAutI+uHJCAAD4Gz+4ckIAADZlP7hyQgAAdK4/uHJC","dtype":"float64","shape":[288]},"y":[143,147,150,152,152,152,154,155,142,140,138,134,131,130,128,127,126,126,126,126,127,129,131,132,134,136,136,136,136,135,134,132,130,130,130,129,128,127,125,124,123,123,122,121,120,118,115,112,111,111,110,110,109,108,107,107,107,108,107,105,105,105,105,104,103,102,99,97,96,94,94,93,93,92,91,92,94,95,96,97,99,102,104,112,112,112,111,110,107,104,105,105,103,99,96,94,95,102,114,128,144,160,173,185,196,205,209,214,219,226,234,241,248,255,260,265,268,270,272,271,271,268,265,261,256,253,250,246,244,241,237,233,229,225,222,204,200,197,193,190,186,182,179,175,171,168,164,158,154,151,148,145,141,133,139,152,173,196,217,233,244,249,250,253,256,260,263,265,265,264,260,254,246,234,217,200,188,181,175,169,164,159,154,147,138,132,129,127,123,117,111,106,104,103,100,94,88,83,78,75,73,71,69,68,67,67,68,70,71,71,70,69,68,67,67,67,66,67,69,71,74,76,78,80,80,80,80,80,80,82,84,87,90,92,87,87,86,86,86,86,87,87,87,85,83,82,83,87,95,107,118,130,141,149,172,179,187,201,214,221,225,230,232,230,223,216,208,199,191,185,181,177,176,177,176,173,171,169,163,154,152,153,154,154,153,151,150,150]}},"id":"d04a0f68-8f1b-4024-8577-4bd91508d3a0","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.3},"fill_color":{"value":"firebrick"},"line_alpha":{"value":0.3},"line_color":{"value":"white"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"3b292ba9-2c8f-459d-8f2b-12bd18715cb7","type":"Circle"},{"attributes":{"days":[1,8,15,22]},"id":"2368da1d-e027-4fcd-8849-7e750bfe21c4","type":"DaysTicker"},{"attributes":{"base":60,"mantissas":[1,2,5,10,15,20,30],"max_interval":1800000.0,"min_interval":1000.0,"num_minor_ticks":0},"id":"411c7713-c558-4354-b43d-6d2a2c756b4f","type":"AdaptiveTicker"},{"attributes":{},"id":"1ef6afd2-a794-42ec-9905-6bea2febb113","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"155d5b99-3fe8-4281-ba66-8c6ba46235c0","type":"ColumnDataSource"}},"id":"6d23c254-56c4-45ec-9fcc-736a8367dca2","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"c32dabfc-8588-4f69-be79-72ffbae21eac","type":"Circle"},{"attributes":{},"id":"8077e418-73de-4fcc-a046-d1c7062d4d36","type":"YearsTicker"},{"attributes":{"plot":{"id":"f92e7d58-9a2a-4e45-a82f-54dac1344ab6","subtype":"Figure","type":"Plot"},"ticker":{"id":"d64cfe7a-f9bc-4b26-a61a-7e984dabb4ae","type":"DatetimeTicker"}},"id":"5211d2a7-f7eb-45cd-8414-93b9a1f89b99","type":"Grid"},{"attributes":{"base":24,"mantissas":[1,2,4,6,8,12],"max_interval":43200000.0,"min_interval":3600000.0,"num_minor_ticks":0},"id":"97d97aeb-5084-42b3-bbde-c478734b8921","type":"AdaptiveTicker"},{"attributes":{},"id":"b63b137e-5932-4d02-ae4b-fccee8b45f44","type":"LinearScale"},{"attributes":{"num_minor_ticks":5,"tickers":[{"id":"33050f60-c876-46fc-98ba-274b5caa0dbd","type":"AdaptiveTicker"},{"id":"411c7713-c558-4354-b43d-6d2a2c756b4f","type":"AdaptiveTicker"},{"id":"97d97aeb-5084-42b3-bbde-c478734b8921","type":"AdaptiveTicker"},{"id":"6fdf3100-5cc1-4c55-aa89-5207c3b18269","type":"DaysTicker"},{"id":"6316a66a-ad28-4e40-952b-8eb24021f286","type":"DaysTicker"},{"id":"2368da1d-e027-4fcd-8849-7e750bfe21c4","type":"DaysTicker"},{"id":"3068a4a6-7004-4d6b-8188-0375f0209a8b","type":"DaysTicker"},{"id":"ccbbe035-66f0-49f4-9d26-ece00b48c273","type":"MonthsTicker"},{"id":"4c7acea5-62e5-4b02-9a1e-44000f73c2ea","type":"MonthsTicker"},{"id":"d0640299-3fe5-45a7-9d46-c390fcb21eb3","type":"MonthsTicker"},{"id":"41830918-ad15-4daa-bf19-237fce436032","type":"MonthsTicker"},{"id":"8077e418-73de-4fcc-a046-d1c7062d4d36","type":"YearsTicker"}]},"id":"d64cfe7a-f9bc-4b26-a61a-7e984dabb4ae","type":"DatetimeTicker"},{"attributes":{"days":[1,4,7,10,13,16,19,22,25,28]},"id":"6316a66a-ad28-4e40-952b-8eb24021f286","type":"DaysTicker"},{"attributes":{"source":{"id":"d04a0f68-8f1b-4024-8577-4bd91508d3a0","type":"ColumnDataSource"}},"id":"cc62e32a-6b27-4fa3-a123-5a8c07c6b5c8","type":"CDSView"},{"attributes":{},"id":"f76b827e-957d-44a8-87cc-c203d479ffb4","type":"LinearScale"},{"attributes":{},"id":"c6a37b80-3a67-4c1b-a7b7-c87951e5b5c9","type":"BasicTicker"},{"attributes":{"days":[1,15]},"id":"3068a4a6-7004-4d6b-8188-0375f0209a8b","type":"DaysTicker"},{"attributes":{"callback":null},"id":"e114fd78-2b3a-4cb8-97ae-4e20f7e0fa47","type":"DataRange1d"},{"attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]},"id":"ccbbe035-66f0-49f4-9d26-ece00b48c273","type":"MonthsTicker"},{"attributes":{"callback":null},"id":"cd61f145-e2ef-4b58-a0c0-44c8da03c7ff","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"f92e7d58-9a2a-4e45-a82f-54dac1344ab6","subtype":"Figure","type":"Plot"},"ticker":{"id":"c6a37b80-3a67-4c1b-a7b7-c87951e5b5c9","type":"BasicTicker"}},"id":"a1dbf647-c6f3-4eab-b995-15a7b175d9f7","type":"Grid"},{"attributes":{"months":[0,6]},"id":"41830918-ad15-4daa-bf19-237fce436032","type":"MonthsTicker"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_dash":[4,4],"x":{"field":"x"},"y":{"field":"y"}},"id":"da82e491-2a16-4d19-b3cd-c5befa902fbf","type":"Line"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"AADyke23ckIAADDb7bdyQgAAbiTut3JCAACsbe63ckIAAOq27rdyQgAAKADvt3JCAABmSe+3ckIAAKSS77dyQgAA4tvvt3JCAAAgJfC3ckIAAF5u8LdyQgAAnLfwt3JCAADaAPG3ckIAABhK8bdyQgAAVpPxt3JCAACU3PG3ckIAANIl8rdyQgAAEG/yt3JCAABOuPK3ckIAAIwB87dyQgAAykrzt3JCAAAIlPO3ckIAAEbd87dyQgAAhCb0t3JCAADCb/S3ckIAAAC59LdyQgAAPgL1t3JCAAB8S/W3ckIAALqU9bdyQgAA+N31t3JCAAA2J/a3ckIAAHRw9rdyQgAAsrn2t3JCAADwAve3ckIAAC5M97dyQgAAbJX3t3JCAACq3ve3ckIAAOgn+LdyQgAAJnH4t3JCAABkuvi3ckIAAKID+bdyQgAA4Ez5t3JCAAAelvm3ckIAAFzf+bdyQgAAmij6t3JCAADYcfq3ckIAABa7+rdyQgAAVAT7t3JCAACSTfu3ckIAANCW+7dyQgAADuD7t3JCAABMKfy3ckIAAIpy/LdyQgAAyLv8t3JCAAAGBf23ckIAAERO/bdyQgAAgpf9t3JCAADA4P23ckIAAP4p/rdyQgAAPHP+t3JCAAB6vP63ckIAALgF/7dyQgAA9k7/t3JCAAA0mP+3ckIAAHLh/7dyQgAAsCoAuHJCAADucwC4ckIAACy9ALhyQgAAagYBuHJCAACoTwG4ckIAAOaYAbhyQgAAJOIBuHJCAABiKwK4ckIAAKB0ArhyQgAA3r0CuHJCAAAcBwO4ckIAAFpQA7hyQgAAmJkDuHJCAADW4gO4ckIAABQsBLhyQgAAUnUEuHJCAACQvgS4ckIAAM4HBbhyQgAADFEFuHJCAABKmgW4ckIAAIjjBbhyQgAAxiwGuHJCAAAEdga4ckIAAEK/BrhyQgAAgAgHuHJCAAC+UQe4ckIAAPyaB7hyQgAAOuQHuHJCAAB4LQi4ckIAALZ2CLhyQgAA9L8IuHJCAAAyCQm4ckIAAHBSCbhyQgAArpsJuHJCAADs5Am4ckIAACouCrhyQgAAaHcKuHJCAACmwAq4ckIAAOQJC7hyQgAAIlMLuHJCAABgnAu4ckIAAJ7lC7hyQgAA3C4MuHJCAAAaeAy4ckIAAFjBDLhyQgAAlgoNuHJCAADUUw24ckIAABKdDbhyQgAAUOYNuHJCAACOLw64ckIAAMx4DrhyQgAACsIOuHJCAABICw+4ckIAAIZUD7hyQgAAxJ0PuHJCAAAC5w+4ckIAAEAwELhyQgAAfnkQuHJCAAC8whC4ckIAAPoLEbhyQgAAOFURuHJCAAB2nhG4ckIAALTnEbhyQgAA8jASuHJCAAAwehK4ckIAAG7DErhyQgAArAwTuHJCAADqVRO4ckIAACifE7hyQgAAZugTuHJCAACkMRS4ckIAAOJ6FLhyQgAAIMQUuHJCAABeDRW4ckIAAJxWFbhyQgAA2p8VuHJCAAAY6RW4ckIAAFYyFrhyQgAAlHsWuHJCAADSxBa4ckIAABAOF7hyQgAATlcXuHJCAACMoBe4ckIAAMrpF7hyQgAACDMYuHJCAABGfBi4ckIAAITFGLhyQgAAwg4ZuHJCAAAAWBm4ckIAAD6hGbhyQgAAfOoZuHJCAAC6Mxq4ckIAAPh8GrhyQgAANsYauHJCAAB0Dxu4ckIAALJYG7hyQgAA8KEbuHJCAAAu6xu4ckIAAGw0HLhyQgAAqn0cuHJCAADoxhy4ckIAACYQHbhyQgAAZFkduHJCAACioh24ckIAAODrHbhyQgAAHjUeuHJCAABcfh64ckIAAJrHHrhyQgAA2BAfuHJCAAAWWh+4ckIAAFSjH7hyQgAAkuwfuHJCAADQNSC4ckIAAA5/ILhyQgAATMgguHJCAACKESG4ckIAAMhaIbhyQgAABqQhuHJCAABE7SG4ckIAAII2IrhyQgAAwH8iuHJCAAD+yCK4ckIAADwSI7hyQgAAelsjuHJCAAC4pCO4ckIAAPbtI7hyQgAANDckuHJCAABygCS4ckIAALDJJLhyQgAA7hIluHJCAAAsXCW4ckIAAGqlJbhyQgAAqO4luHJCAADmNya4ckIAACSBJrhyQgAAYsomuHJCAACgEye4ckIAAN5cJ7hyQgAAHKYnuHJCAABa7ye4ckIAAJg4KLhyQgAA1oEouHJCAAAUyyi4ckIAAFIUKbhyQgAAkF0puHJCAADOpim4ckIAAAzwKbhyQgAASjkquHJCAACIgiq4ckIAAMbLKrhyQgAABBUruHJCAABCXiu4ckIAAICnK7hyQgAAvvAruHJCAAD8OSy4ckIAADqDLLhyQgAAeMwsuHJCAAC2FS24ckIAAPReLbhyQgAAMqgtuHJCAABw8S24ckIAAK46LrhyQgAA7IMuuHJCAAAqzS64ckIAAGgWL7hyQgAApl8vuHJCAADkqC+4ckIAACLyL7hyQgAAYDswuHJCAACehDC4ckIAANzNMLhyQgAAGhcxuHJCAABYYDG4ckIAAJapMbhyQgAA1PIxuHJCAAASPDK4ckIAAFCFMrhyQgAAjs4yuHJCAADMFzO4ckIAAAphM7hyQgAASKozuHJCAACG8zO4ckIAAMQ8NLhyQgAAAoY0uHJCAABAzzS4ckIAAH4YNbhyQgAAvGE1uHJCAAD6qjW4ckIAADj0NbhyQgAAdj02uHJCAAC0hja4ckIAAPLPNrhyQgAAMBk3uHJCAABuYje4ckIAAKyrN7hyQgAA6vQ3uHJCAAAoPji4ckIAAGaHOLhyQgAApNA4uHJCAADiGTm4ckIAACBjObhyQgAAXqw5uHJCAACc9Tm4ckIAANo+OrhyQgAAGIg6uHJCAABW0Tq4ckIAAJQaO7hyQgAA0mM7uHJCAAAQrTu4ckIAAE72O7hyQgAAjD88uHJCAADKiDy4ckIAAAjSPLhyQgAARhs9uHJCAACEZD24ckIAAMKtPbhyQgAAAPc9uHJCAAA+QD64ckIAAHyJPrhyQgAAutI+uHJCAAD4Gz+4ckIAADZlP7hyQgAAdK4/uHJC","dtype":"float64","shape":[288]},"y":[143,147,150,152,152,152,154,155,142,140,138,134,131,130,128,127,126,126,126,126,127,129,131,132,134,136,136,136,136,135,134,132,130,130,130,129,128,127,125,124,123,123,122,121,120,118,115,112,111,111,110,110,109,108,107,107,107,108,107,105,105,105,105,104,103,102,99,97,96,94,94,93,93,92,91,92,94,95,96,97,99,102,104,112,112,112,111,110,107,104,105,105,103,99,96,94,95,102,114,128,144,160,173,185,196,205,209,214,219,226,234,241,248,255,260,265,268,270,272,271,271,268,265,261,256,253,250,246,244,241,237,233,229,225,222,204,200,197,193,190,186,182,179,175,171,168,164,158,154,151,148,145,141,133,139,152,173,196,217,233,244,249,250,253,256,260,263,265,265,264,260,254,246,234,217,200,188,181,175,169,164,159,154,147,138,132,129,127,123,117,111,106,104,103,100,94,88,83,78,75,73,71,69,68,67,67,68,70,71,71,70,69,68,67,67,67,66,67,69,71,74,76,78,80,80,80,80,80,80,82,84,87,90,92,87,87,86,86,86,86,87,87,87,85,83,82,83,87,95,107,118,130,141,149,172,179,187,201,214,221,225,230,232,230,223,216,208,199,191,185,181,177,176,177,176,173,171,169,163,154,152,153,154,154,153,151,150,150]}},"id":"155d5b99-3fe8-4281-ba66-8c6ba46235c0","type":"ColumnDataSource"},{"attributes":{},"id":"71141b31-7768-457c-8cfc-39d203d06d67","type":"DatetimeTickFormatter"},{"attributes":{"months":[0,4,8]},"id":"d0640299-3fe5-45a7-9d46-c390fcb21eb3","type":"MonthsTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"96061bd7-1d51-4538-8ee2-10d7a4fc6b98","type":"HoverTool"}]},"id":"7b8eb66f-1f5b-4a91-929c-701599ab4162","type":"Toolbar"},{"attributes":{"formatter":{"id":"71141b31-7768-457c-8cfc-39d203d06d67","type":"DatetimeTickFormatter"},"plot":{"id":"f92e7d58-9a2a-4e45-a82f-54dac1344ab6","subtype":"Figure","type":"Plot"},"ticker":{"id":"d64cfe7a-f9bc-4b26-a61a-7e984dabb4ae","type":"DatetimeTicker"}},"id":"bedc5b99-d696-43a2-a392-bd9d02e3546e","type":"DatetimeAxis"},{"attributes":{"data_source":{"id":"155d5b99-3fe8-4281-ba66-8c6ba46235c0","type":"ColumnDataSource"},"glyph":{"id":"3df1c57a-3bb7-4a2b-82f1-8e70625f0ad7","type":"Circle"},"hover_glyph":{"id":"3b292ba9-2c8f-459d-8f2b-12bd18715cb7","type":"Circle"},"muted_glyph":null,"nonselection_glyph":{"id":"c32dabfc-8588-4f69-be79-72ffbae21eac","type":"Circle"},"selection_glyph":null,"view":{"id":"6d23c254-56c4-45ec-9fcc-736a8367dca2","type":"CDSView"}},"id":"cdd8a7ef-aa33-4688-a26a-42d6fb9e622d","type":"GlyphRenderer"},{"attributes":{"line_color":{"value":"gray"},"line_dash":[4,4],"x":{"field":"x"},"y":{"field":"y"}},"id":"ed0b3c2a-afa9-4cba-9a6d-0af596f7c9cb","type":"Line"},{"attributes":{"callback":null,"mode":"hline","renderers":[{"id":"cdd8a7ef-aa33-4688-a26a-42d6fb9e622d","type":"GlyphRenderer"}],"tooltips":null},"id":"96061bd7-1d51-4538-8ee2-10d7a4fc6b98","type":"HoverTool"},{"attributes":{"formatter":{"id":"1ef6afd2-a794-42ec-9905-6bea2febb113","type":"BasicTickFormatter"},"plot":{"id":"f92e7d58-9a2a-4e45-a82f-54dac1344ab6","subtype":"Figure","type":"Plot"},"ticker":{"id":"c6a37b80-3a67-4c1b-a7b7-c87951e5b5c9","type":"BasicTicker"}},"id":"66839797-2bbe-4557-8c27-6539b8c21448","type":"LinearAxis"}],"root_ids":["f92e7d58-9a2a-4e45-a82f-54dac1344ab6"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"2e61de4d-f270-4509-a625-1921ef108f49","elementid":"9ceadf6e-bab8-4785-ae16-ac898d53ea53","modelid":"f92e7d58-9a2a-4e45-a82f-54dac1344ab6"}];
                
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
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
