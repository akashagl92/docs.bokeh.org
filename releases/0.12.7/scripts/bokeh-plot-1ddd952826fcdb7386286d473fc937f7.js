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
      };var element = document.getElementById("9ab83f3b-e1af-4418-8fd6-41f7e4dd4042");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '9ab83f3b-e1af-4418-8fd6-41f7e4dd4042' but no matching script tag was found. ")
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
                var docs_json = {"f277d223-d873-4ec4-a2a8-660f561e032f":{"roots":{"references":[{"attributes":{},"id":"38e569ce-c4ee-4fd2-abbe-1065bd9e5755","type":"SaveTool"},{"attributes":{},"id":"edbe1e6f-5382-4151-8546-980f52386f97","type":"ResetTool"},{"attributes":{"plot":null,"text":"MSFT Candlestick"},"id":"6de621da-a8c2-40d7-8033-71445a7dcb41","type":"Title"},{"attributes":{"overlay":{"id":"056ae4ed-8e93-41c8-9469-602fd2ac5633","type":"BoxAnnotation"}},"id":"d1c3aed8-4b9c-413c-b95c-301c035eaf99","type":"BoxZoomTool"},{"attributes":{},"id":"2f710982-6c8d-41a8-beba-d9b6fc3a580d","type":"WheelZoomTool"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"0bcf9206-ca10-4b68-a4e6-2af6e3c2c5e7","type":"Segment"},{"attributes":{"below":[{"id":"86af9dcd-5472-44f2-a499-1868d4acd6b2","type":"DatetimeAxis"}],"left":[{"id":"8717dd9c-de2a-491d-821b-70a3ab6ced30","type":"LinearAxis"}],"plot_width":1000,"renderers":[{"id":"86af9dcd-5472-44f2-a499-1868d4acd6b2","type":"DatetimeAxis"},{"id":"ee8e3ee8-7944-4fc3-8fb6-437ba543e926","type":"Grid"},{"id":"8717dd9c-de2a-491d-821b-70a3ab6ced30","type":"LinearAxis"},{"id":"9c3826c4-e0d6-4bde-9905-6ed9bc4c6e21","type":"Grid"},{"id":"056ae4ed-8e93-41c8-9469-602fd2ac5633","type":"BoxAnnotation"},{"id":"58cce12e-26f2-40ed-8ee5-6a990a0ce55c","type":"GlyphRenderer"},{"id":"16596d34-1ee9-4302-9986-de838caeb486","type":"GlyphRenderer"},{"id":"03632a72-1814-4cae-8ab3-9388fece27a2","type":"GlyphRenderer"}],"title":{"id":"6de621da-a8c2-40d7-8033-71445a7dcb41","type":"Title"},"toolbar":{"id":"d71fd666-a681-4721-8293-2890ac5f1093","type":"Toolbar"},"x_range":{"id":"29681ebf-3d7a-4ffc-bf52-a1975b170633","type":"DataRange1d"},"x_scale":{"id":"b75bf3f8-e629-4425-9eb0-1625c6429876","type":"LinearScale"},"y_range":{"id":"ea56daeb-9c7f-4c17-b53c-ce6b292f5da2","type":"DataRange1d"},"y_scale":{"id":"dc6a1603-490f-4816-8935-d1c3b1597bf6","type":"LinearScale"}},"id":"2f2e72f4-7e53-4382-b17a-a4c2288a261e","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"02a3ebf9-71ae-4ce6-9563-f7d372287542","type":"PanTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"056ae4ed-8e93-41c8-9469-602fd2ac5633","type":"BoxAnnotation"},{"attributes":{},"id":"b75bf3f8-e629-4425-9eb0-1625c6429876","type":"LinearScale"},{"attributes":{"months":[0,2,4,6,8,10]},"id":"d67baff0-1372-4327-8f0b-84767f448366","type":"MonthsTicker"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":43200000},"x":{"field":"x"}},"id":"6df09804-dc29-4269-ae55-51b4e8fa469d","type":"VBar"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"02a3ebf9-71ae-4ce6-9563-f7d372287542","type":"PanTool"},{"id":"2f710982-6c8d-41a8-beba-d9b6fc3a580d","type":"WheelZoomTool"},{"id":"d1c3aed8-4b9c-413c-b95c-301c035eaf99","type":"BoxZoomTool"},{"id":"edbe1e6f-5382-4151-8546-980f52386f97","type":"ResetTool"},{"id":"38e569ce-c4ee-4fd2-abbe-1065bd9e5755","type":"SaveTool"}]},"id":"d71fd666-a681-4721-8293-2890ac5f1093","type":"Toolbar"},{"attributes":{"data_source":{"id":"ccd8adea-e256-48f1-a024-15073a31e551","type":"ColumnDataSource"},"glyph":{"id":"f870f63b-7043-4af0-be15-2f0a0ec52522","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6df09804-dc29-4269-ae55-51b4e8fa469d","type":"VBar"},"selection_glyph":null,"view":{"id":"1b523710-4824-4411-a738-917669b63a8b","type":"CDSView"}},"id":"16596d34-1ee9-4302-9986-de838caeb486","type":"GlyphRenderer"},{"attributes":{"source":{"id":"6b7c0038-0a7a-4d08-80d9-2b216bb0346c","type":"ColumnDataSource"}},"id":"fa2e0767-c93b-4e08-aa18-d702f45fb234","type":"CDSView"},{"attributes":{"days":[1,8,15,22]},"id":"fb9d70a2-ef5a-4309-825c-4cac128825eb","type":"DaysTicker"},{"attributes":{"data_source":{"id":"6b7c0038-0a7a-4d08-80d9-2b216bb0346c","type":"ColumnDataSource"},"glyph":{"id":"fd2502f9-f56f-4a2e-b45e-070eb6ddae49","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"cc7b0f61-e547-4f4f-8c7b-823b00ed9c93","type":"VBar"},"selection_glyph":null,"view":{"id":"fa2e0767-c93b-4e08-aa18-d702f45fb234","type":"CDSView"}},"id":"03632a72-1814-4cae-8ab3-9388fece27a2","type":"GlyphRenderer"},{"attributes":{"dimension":1,"grid_line_alpha":{"value":0.3},"plot":{"id":"2f2e72f4-7e53-4382-b17a-a4c2288a261e","subtype":"Figure","type":"Plot"},"ticker":{"id":"b8d91b8e-8c91-48e4-96a6-37f1df450408","type":"BasicTicker"}},"id":"9c3826c4-e0d6-4bde-9905-6ed9bc4c6e21","type":"Grid"},{"attributes":{"callback":null},"id":"ea56daeb-9c7f-4c17-b53c-ce6b292f5da2","type":"DataRange1d"},{"attributes":{"max_interval":500.0,"num_minor_ticks":0},"id":"2c757b8a-5d53-4ebb-af66-d4d2cb7cc430","type":"AdaptiveTicker"},{"attributes":{"days":[1,4,7,10,13,16,19,22,25,28]},"id":"3e40a714-6a5e-4a97-bccf-f3146055c19e","type":"DaysTicker"},{"attributes":{},"id":"b8d91b8e-8c91-48e4-96a6-37f1df450408","type":"BasicTicker"},{"attributes":{"formatter":{"id":"6f897444-2752-4f68-a595-47bfdb2d0f0c","type":"BasicTickFormatter"},"plot":{"id":"2f2e72f4-7e53-4382-b17a-a4c2288a261e","subtype":"Figure","type":"Plot"},"ticker":{"id":"b8d91b8e-8c91-48e4-96a6-37f1df450408","type":"BasicTicker"}},"id":"8717dd9c-de2a-491d-821b-70a3ab6ced30","type":"LinearAxis"},{"attributes":{"grid_line_alpha":{"value":0.3},"plot":{"id":"2f2e72f4-7e53-4382-b17a-a4c2288a261e","subtype":"Figure","type":"Plot"},"ticker":{"id":"dee723f9-fe4e-4edb-91df-7e252ddaea4d","type":"DatetimeTicker"}},"id":"ee8e3ee8-7944-4fc3-8fb6-437ba543e926","type":"Grid"},{"attributes":{"num_minor_ticks":5},"id":"dee723f9-fe4e-4edb-91df-7e252ddaea4d","type":"DatetimeTicker"},{"attributes":{"formatter":{"id":"76ec0d15-e093-4536-8104-4039e8abf7f1","type":"DatetimeTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"2f2e72f4-7e53-4382-b17a-a4c2288a261e","subtype":"Figure","type":"Plot"},"ticker":{"id":"dee723f9-fe4e-4edb-91df-7e252ddaea4d","type":"DatetimeTicker"}},"id":"86af9dcd-5472-44f2-a499-1868d4acd6b2","type":"DatetimeAxis"},{"attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]},"id":"a1eeaeef-6f31-4ed2-a030-c19134a6250b","type":"MonthsTicker"},{"attributes":{"months":[0,6]},"id":"51bc4513-d7c9-4060-9761-f897febaa14b","type":"MonthsTicker"},{"attributes":{},"id":"76ec0d15-e093-4536-8104-4039e8abf7f1","type":"DatetimeTickFormatter"},{"attributes":{"bottom":{"field":"bottom"},"fill_color":{"value":"#F2583E"},"top":{"field":"top"},"width":{"value":43200000},"x":{"field":"x"}},"id":"fd2502f9-f56f-4a2e-b45e-070eb6ddae49","type":"VBar"},{"attributes":{"months":[0,4,8]},"id":"5228186f-c699-4ddf-badd-68f1da74616b","type":"MonthsTicker"},{"attributes":{},"id":"6f897444-2752-4f68-a595-47bfdb2d0f0c","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"ccd8adea-e256-48f1-a024-15073a31e551","type":"ColumnDataSource"}},"id":"1b523710-4824-4411-a738-917669b63a8b","type":"CDSView"},{"attributes":{"callback":null,"column_names":["x","top","bottom"],"data":{"bottom":{"__ndarray__":"SOF6FK6nVkBI4XoUrjdXQEjhehSux1dASOF6FK7XV0BI4XoUrldYQFyPwvUo7FtApHA9CtcDWkBI4XoUrtdZQEjhehSut1ZApHA9CtcjVkBI4XoUrpdVQAAAAAAAgFVApHA9CteDVUBI4XoUrvdUQEjhehSu11NAAAAAAADQU0BI4XoUrodSQFyPwvUorFNASOF6FK6nUEAAAAAAAABRQAAAAAAAcFFASOF6FK53UUCkcD0K13NRQKRwPQrX81BAXI/C9SiMUEA=","dtype":"float64","shape":[25]},"top":{"__ndarray__":"AAAAAAAAWEBI4XoUrgdYQEjhehSup1hAXI/C9Sj8V0AAAAAAALBYQEjhehSuJ1xA4XoUrkfxWkBcj8L1KIxaQFyPwvUonFdApHA9CtfjVkAAAAAAABBWQEjhehSu91VASOF6FK4nVkBI4XoUrkdVQEjhehSuh1RASOF6FK43VEBI4XoUrsdTQFyPwvUoXFRAAAAAAADQUEAAAAAAAIBRQAAAAAAAsFFApHA9CtczUkBcj8L1KLxRQFyPwvUojFFAAAAAAADwUEA=","dtype":"float64","shape":[25]},"x":{"__ndarray__":"AAAAoTG3a0IAAIBs1rdrQgAAAP1XvGtCAAAAlKG9a0IAAADCNMBrQgAAAPDHwmtCAACAUrbEa0IAAAC1pMZrQgAAAOM3yWtCAACArtzJa0IAAAB6gcprQgAAgEUmy2tCAACAc7nNa0IAAAA/Xs5rQgAAgAoDz2tCAAAA1qfPa0IAAIChTNBrQgAAAJuE02tCAACAlLzWa0IAAIArBthrQgAAgMJP2WtCAACA8OLba0IAAIC1v99rQgAAAIFk4GtCAACATAnha0I=","dtype":"float64","shape":[25]}}},"id":"6b7c0038-0a7a-4d08-80d9-2b216bb0346c","type":"ColumnDataSource"},{"attributes":{},"id":"dc6a1603-490f-4816-8935-d1c3b1597bf6","type":"LinearScale"},{"attributes":{"source":{"id":"84107f08-fd92-46d6-8288-539841ba7d49","type":"ColumnDataSource"}},"id":"b5748a6f-1ba0-44e7-91d4-bea35f413447","type":"CDSView"},{"attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]},"id":"0624daba-d127-47fa-b458-f438f8b48e68","type":"DaysTicker"},{"attributes":{},"id":"fe477004-8a02-4294-9180-178bb0d9245c","type":"YearsTicker"},{"attributes":{"base":24,"mantissas":[1,2,4,6,8,12],"max_interval":43200000.0,"min_interval":3600000.0,"num_minor_ticks":0},"id":"92165b62-6548-4290-a6c8-8bde4a9d4e18","type":"AdaptiveTicker"},{"attributes":{"callback":null},"id":"29681ebf-3d7a-4ffc-bf52-a1975b170633","type":"DataRange1d"},{"attributes":{"bottom":{"field":"bottom"},"fill_color":{"value":"#D5E1DD"},"top":{"field":"top"},"width":{"value":43200000},"x":{"field":"x"}},"id":"f870f63b-7043-4af0-be15-2f0a0ec52522","type":"VBar"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":43200000},"x":{"field":"x"}},"id":"cc7b0f61-e547-4f4f-8c7b-823b00ed9c93","type":"VBar"},{"attributes":{"callback":null,"column_names":["x","top","bottom"],"data":{"bottom":{"__ndarray__":"pHA9CtezVkBI4XoUrldXQEjhehSuB1hApHA9CtfjV0AAAAAAAABZQAAAAAAAQFlAAAAAAACAWEBI4XoUrtdXQEjhehSu11hAAAAAAACwWUAAAAAAANBZQEjhehSu91tApHA9CtcTWkBcj8L1KMxaQAAAAAAAkFpApHA9CtdDVkBI4XoUrvdSQKRwPQrXI1RAXI/C9Si8U0BI4XoUrldRQKRwPQrXc1FAXI/C9ShcUkCkcD0K16NRQFyPwvUonFFASOF6FK7HUUA=","dtype":"float64","shape":[25]},"top":{"__ndarray__":"SOF6FK5nVkCkcD0K1/NWQAAAAAAAsFdApHA9CtdzV0CkcD0K19NXQKRwPQrX41hASOF6FK5nWECkcD0K16NXQAAAAAAA0FdAAAAAAAAwWECkcD0K17NZQKRwPQrXs1pASOF6FK7nWUBcj8L1KExaQAAAAAAAgFpAAAAAAADAVUAAAAAAAJBSQAAAAAAAIFNASOF6FK6nU0AAAAAAADBRQFyPwvUo3FBASOF6FK43UkBI4XoUrpdRQKRwPQrXk1FAAAAAAACQUUA=","dtype":"float64","shape":[25]},"x":{"__ndarray__":"AACAp/mza0IAAABznrRrQgAAgD5DtWtCAAAAOHu4a0IAAIADILlrQgAAAM/EuWtCAACAMbO7a0IAAIDI/LxrQgAAgF9GvmtCAACAjdnAa0IAAABZfsFrQgAAgCQjwmtCAAAAHlvFa0IAAIDp/8VrQgAAgIBJx2tCAAAAEcvLa0IAAAAEO9JrQgAAgM/f0mtCAACAZinUa0IAAABgYddrQgAAAPeq2GtCAAAAJT7ba0IAAAC8h9xrQgAAgIcs3WtCAAAAU9Hda0I=","dtype":"float64","shape":[25]}}},"id":"ccd8adea-e256-48f1-a024-15073a31e551","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"84107f08-fd92-46d6-8288-539841ba7d49","type":"ColumnDataSource"},"glyph":{"id":"4579cff0-27d2-4d16-861e-0da68ed6baa8","type":"Segment"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"0bcf9206-ca10-4b68-a4e6-2af6e3c2c5e7","type":"Segment"},"selection_glyph":null,"view":{"id":"b5748a6f-1ba0-44e7-91d4-bea35f413447","type":"CDSView"}},"id":"58cce12e-26f2-40ed-8ee5-6a990a0ce55c","type":"GlyphRenderer"},{"attributes":{"days":[1,15]},"id":"bfe59c91-a63c-4526-9188-055c2be2f83e","type":"DaysTicker"},{"attributes":{"base":60,"mantissas":[1,2,5,10,15,20,30],"max_interval":1800000.0,"min_interval":1000.0,"num_minor_ticks":0},"id":"f24a3296-ab2e-4dad-b569-f4ed9057f880","type":"AdaptiveTicker"},{"attributes":{"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"4579cff0-27d2-4d16-861e-0da68ed6baa8","type":"Segment"},{"attributes":{"callback":null,"column_names":["x0","y0","x1","y1"],"data":{"x0":{"__ndarray__":"AACAp/mza0IAAABznrRrQgAAgD5DtWtCAAAAoTG3a0IAAIBs1rdrQgAAADh7uGtCAACAAyC5a0IAAADPxLlrQgAAgDGzu2tCAAAA/Ve8a0IAAIDI/LxrQgAAAJShvWtCAACAX0a+a0IAAADCNMBrQgAAgI3ZwGtCAAAAWX7Ba0IAAIAkI8JrQgAAAPDHwmtCAACAUrbEa0IAAAAeW8VrQgAAgOn/xWtCAAAAtaTGa0IAAICAScdrQgAAAOM3yWtCAACArtzJa0IAAAB6gcprQgAAgEUmy2tCAAAAEcvLa0IAAIBzuc1rQgAAAD9ezmtCAACACgPPa0IAAADWp89rQgAAgKFM0GtCAAAABDvSa0IAAIDP39JrQgAAAJuE02tCAACAZinUa0IAAICUvNZrQgAAAGBh12tCAACAKwbYa0IAAAD3qthrQgAAgMJP2WtCAAAAJT7ba0IAAIDw4ttrQgAAALyH3GtCAACAhyzda0IAAABT0d1rQgAAgLW/32tCAAAAgWTga0IAAIBMCeFrQg==","dtype":"float64","shape":[50]},"x1":{"__ndarray__":"AACAp/mza0IAAABznrRrQgAAgD5DtWtCAAAAoTG3a0IAAIBs1rdrQgAAADh7uGtCAACAAyC5a0IAAADPxLlrQgAAgDGzu2tCAAAA/Ve8a0IAAIDI/LxrQgAAAJShvWtCAACAX0a+a0IAAADCNMBrQgAAgI3ZwGtCAAAAWX7Ba0IAAIAkI8JrQgAAAPDHwmtCAACAUrbEa0IAAAAeW8VrQgAAgOn/xWtCAAAAtaTGa0IAAICAScdrQgAAAOM3yWtCAACArtzJa0IAAAB6gcprQgAAgEUmy2tCAAAAEcvLa0IAAIBzuc1rQgAAAD9ezmtCAACACgPPa0IAAADWp89rQgAAgKFM0GtCAAAABDvSa0IAAIDP39JrQgAAAJuE02tCAACAZinUa0IAAICUvNZrQgAAAGBh12tCAACAKwbYa0IAAAD3qthrQgAAgMJP2WtCAAAAJT7ba0IAAIDw4ttrQgAAALyH3GtCAACAhyzda0IAAABT0d1rQgAAgLW/32tCAAAAgWTga0IAAIBMCeFrQg==","dtype":"float64","shape":[50]},"y0":{"__ndarray__":"9ihcj8KFV0BI4XoUrtdXQEjhehSut1hASOF6FK5XWEAAAAAAAGBYQFyPwvUoDFhAAAAAAAAAWUAAAAAAAKBZQAAAAAAAEFlAAAAAAADQWEBI4XoUridYQFyPwvUoLFhAAAAAAADgWEAAAAAAAPBYQEjhehSux1lASOF6FK5nWkBI4XoUrjdcQAAAAAAAwFxAAAAAAAAQW0Bcj8L1KNxaQFyPwvUoPFtASOF6FK4nW0AAAAAAABBbQAAAAAAAIFhAAAAAAAAAV0AAAAAAACBWQAAAAAAAAFZASOF6FK5XVkBI4XoUridWQKRwPQrXg1VAAAAAAACQVEAAAAAAAJBUQAAAAAAA4FNAAAAAAAAAU0Bcj8L1KHxUQAAAAAAAYFRASOF6FK73U0AAAAAAAABRQAAAAAAAYFFASOF6FK7HUUBcj8L1KHxRQAAAAAAAwFFAAAAAAACAUkAAAAAAAGBSQKRwPQrXs1FAAAAAAADQUUCkcD0K1/NRQEjhehSu11FAXI/C9SicUUBI4XoUrvdQQA==","dtype":"float64","shape":[50]},"y1":{"__ndarray__":"XI/C9Sg8VkBI4XoUrsdWQEjhehSud1dASOF6FK6HVkBcj8L1KPxWQAAAAAAAwFZAAAAAAADAV0AAAAAAAOBYQAAAAAAAYFhASOF6FK7HV0Bcj8L1KGxXQAAAAAAAUFdAAAAAAACgV0AAAAAAACBYQAAAAAAAIFhASOF6FK5HWUBI4XoUrqdaQKRwPQrXY1tAXI/C9Sj8WUBI4XoUrpdZQEjhehSuR1pAAAAAAACgWUBI4XoUrgdaQAAAAAAAgFZAXI/C9Sg8VUBI4XoUrndVQOF6FK5HUVVAAAAAAABAVUAAAAAAAIBVQAAAAAAA4FRAAAAAAACwU0AAAAAAAMBTQAAAAAAAUFJAAAAAAABAUkBI4XoUrvdSQEjhehSuh1NAAAAAAABgU0AAAAAAAEBQQEjhehSu51BASOF6FK7XUEBI4XoUrtdQQAAAAAAAEFFAXI/C9SjsUUAAAAAAAGBRQKRwPQrXM1FApHA9CtdTUUBI4XoUrndRQFyPwvUobFFAAAAAAADgUEAAAAAAAHBQQA==","dtype":"float64","shape":[50]}}},"id":"84107f08-fd92-46d6-8288-539841ba7d49","type":"ColumnDataSource"}],"root_ids":["2f2e72f4-7e53-4382-b17a-a4c2288a261e"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"f277d223-d873-4ec4-a2a8-660f561e032f","elementid":"9ab83f3b-e1af-4418-8fd6-41f7e4dd4042","modelid":"2f2e72f4-7e53-4382-b17a-a4c2288a261e"}];
                
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
